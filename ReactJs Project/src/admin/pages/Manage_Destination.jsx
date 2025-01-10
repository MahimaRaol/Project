/* global $ */

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Aheader from '../common/Aheader';

function Manage_Destination() 
{
  const redirect = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('adminid')) {
      redirect('/admin-login');
    }
  }, [redirect]);

  const adminlogout = () => {
    localStorage.removeItem('adminid');
    localStorage.removeItem('adminname');
    toast.success('Logout Success');
    redirect('/admin-login');
  };

  const [data, setData] = useState([]);
  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/destination`);
    setData(res.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  const deleteHandel = async (id) => {
    await axios.delete(`http://localhost:3000/destination/${id}`);
    toast.success('Delete Destination Successfully');
    fetch();
  };

  const [formvalue, setFormvalue] = useState({
    id: '',
    destination_name: '',
    dest_img: '',
  });

  const editHandel = async (id) => {
    const res = await axios.get(`http://localhost:3000/destination/${id}`);
    setFormvalue(res.data);
    $('#myModal').modal('show'); // Open modal when editing
  };

  const changeHandel = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };

  const validation = () => {
    let isValid = true;

    if (!formvalue.destination_name.trim()) {
      isValid = false;
      toast.error('Destination Name is required!');
    } else if (!/^[A-Za-z\s]+$/.test(formvalue.destination_name)) {
      isValid = false;
      toast.error('Destination Name should only contain alphabets!');
    }

    if (!formvalue.dest_img.trim()) {
      isValid = false;
      toast.error('Destination Picture URL is required!');
    } else if (!/^(https?:\/\/[^\s]+)$/.test(formvalue.dest_img)) {
      isValid = false;
      toast.error('Please provide a valid URL!');
    }

    return isValid;
  };

  const submitHandel = async (e) => {
    e.preventDefault();
    if (validation()) {
      await axios.put(
        `http://localhost:3000/destination/${formvalue.id}`,
        formvalue
      );
      toast.success('Destination Updated Successfully!');
      fetch();
      $('#myModal').modal('hide'); // Close modal on success
    }
  };

  return (
    <div>
      <Aheader />
      <div>
        <section className="contact-us section">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-12">
                  <div className="contact-us-form">
                    <h2>Manage Destination</h2>
                    <br />
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Destination ID</th>
                            <th>Destination Name</th>
                            <th>Destination Picture</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((value) => (
                            <tr key={value.id}>
                              <td>{value.id}</td>
                              <td>{value.destination_name}</td>
                              <td>
                                <img src={value.dest_img} width="50px" alt="Destination" />
                              </td>
                              <td>
                                <button className="btn btn-primary" style={{ marginRight: "10px" }} onClick={() => editHandel(value.id)}>
                                    Edit
                                </button>
                                <button className="btn btn-danger" onClick={() => deleteHandel(value.id)}>Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="modal" id="myModal">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h4 className="modal-title">Edit Destination</h4>
                              <button type="button" className="close" data-dismiss="modal">
                                ×
                              </button>
                            </div>
                            <div className="modal-body">
                              <form onSubmit={submitHandel}>
                                <div className="form-group">
                                  <label>Destination Name</label>
                                  <input
                                    type="text"
                                    name="destination_name"
                                    onChange={changeHandel}
                                    value={formvalue.destination_name}
                                    placeholder="Destination Name"
                                    className="form-control"
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Destination Picture</label>
                                  <input
                                    type="url"
                                    name="dest_img"
                                    onChange={changeHandel}
                                    value={formvalue.dest_img}
                                    placeholder="Destination Picture"
                                    className="form-control"
                                  />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                  Save
                                </button>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Helmet>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
      </Helmet>
    </div>
  );
}

export default Manage_Destination;
