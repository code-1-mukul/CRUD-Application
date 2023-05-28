import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {

    const [inpval, setINP] = useState({
        name: "",
        email: "",
        age: "",
        mobile: "",
        work: "",
        add: "",
        desc: ""
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const addinpdata = async (e) => {
        e.preventDefault();
        const { name,
            email,
            age,
            mobile,
            work,
            add,
            desc } = inpval;
        const res = await fetch("http://localhost:8003/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                age,
                mobile,
                work,
                add,
                desc
            })
        })

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            alert("error");
            console.log("error ");
        }
        else {
            alert("data added");
            console.log("data added")
        }
    }

    return (
        <>
            <div className='container'>
                <NavLink to={'/'}>Home</NavLink>
                <form className='mt-4'>
                    <div className='row'>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" onChange={setdata} value={inpval.name} name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                            <input type="email" onChange={setdata} value={inpval.email} name="email" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
                            <input type="text" onChange={setdata} value={inpval.age} name="age" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Moblie</label>
                            <input type="number" onChange={setdata} value={inpval.mobile} name="mobile" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Work</label>
                            <input type="text" onChange={setdata} value={inpval.work} name="work" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                            <input type="text" onChange={setdata} value={inpval.add} name="add" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 col-lg-12 col-md-12 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                            <textarea onChange={setdata} value={inpval.desc} name="desc" className='form-control' rows={10} cols={20}></textarea>
                        </div>
                        <button type="submit" onClick={addinpdata} className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register