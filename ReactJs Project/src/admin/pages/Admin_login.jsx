import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function Admin_login() {

  const redirect = useNavigate();
  useEffect(() => {
      if (localStorage.getItem('adminid')) {
        redirect('/dashboard')
      }
  })

  const [formvalue, setFormvalue] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false);

  const changeHandel = (e) => {
      setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
      console.log(formvalue);
  }

  function validation() {
    var result = true;

    if (formvalue.email == "") {
        result = false;
        toast.error('Email Field is required !');
        return false;
    }
    if (formvalue.password == "") {
        result = false;
        toast.error('Password Field is required !');
        return false;
    }
    return result;
}
const submitHandel = async (e) => {
    e.preventDefault();
    if (validation()) {
        const res = await axios.get(`http://localhost:3000/admin?email=${formvalue.email}`);
        console.log(res.data);
        if(res.data.length>0)
        {
            if(res.data[0].password==formvalue.password)
            {
                
                    //session create
                    localStorage.setItem('adminid',res.data[0].id)
                    localStorage.setItem('adminname',res.data[0].name);
                    toast.success('Login Success !');
                    redirect('/dashboard');
            }
            else
            {
                toast.error('Password Not match !');
                setFormvalue({...formvalue,email:"",password:""});
                return false;
            }
        }
        else
        {
            toast.error('Email does not Exist !');
            setFormvalue({...formvalue,email:"",password:""});
            return false;
        }
    }
}
  return (
    <div>
    {/* Section: Design Block */}
    <section className="text-center">
    <div className="card-body py-5 px-md-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6">
          <h2 className="fw-bold mb-5">Admin Login</h2>
          <form className="form" action="" method="post" onSubmit={submitHandel}>
            {/* Email input */}
            <div data-mdb-input-init className="form-outline mb-4">
              <input name="email" onChange={changeHandel} value={formvalue.email} type="email" placeholder="Email" className="form-control" />
              <label className="form-label" htmlFor="form3Example4">Email</label>
            </div>
            {/* Password input */}
            <div data-mdb-input-init className="form-outline mb-4">
              <div className="input-group">
                  <input type={showPassword ? "text" : "password"} name="password" onChange={changeHandel} value={formvalue.password} placeholder="Enter Password" className="form-control" />
                  <span className="input-group-text" style={{ cursor: "pointer" }} onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                      <i className="bi bi-eye-slash"></i> // Eye-off icon
                  ) : (
                      <i className="bi bi-eye"></i> // Eye icon
                  )}
                  </span>
              </div>
              <label className="form-label" htmlFor="form3Example4">Password</label>
            </div>
            {/* Submit button */}
            <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
            Admin Login
            </button>
          </form>
        </div>
      </div>

    </div>
    </section>
    {/* Section: Design Block */}


    </div>
  )
}

export default Admin_login