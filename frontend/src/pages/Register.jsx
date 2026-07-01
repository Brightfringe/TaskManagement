import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/authService";

function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        role: "USER"
    });

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await register(form);

            alert("Registration Successful");

            navigate("/");

        } catch (error) {

            alert(error.response?.data?.message || "Registration Failed");

        }

    };

    return (

        <div className="container">

            <div className="row justify-content-center align-items-center vh-100">

                <div className="col-md-6">

                    <div className="card shadow-lg p-4">

                        <h2 className="text-center mb-4">

                            Create Account

                        </h2>

                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">

                                <label>Name</label>

                                <input
                                    className="form-control"
                                    name="name"
                                    placeholder="Enter Name"
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="mb-3">

                                <label>Email</label>

                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="mb-3">

                                <label>Password</label>

                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="mb-4">

                                <label>Role</label>

                                <select
                                    className="form-select"
                                    name="role"
                                    onChange={handleChange}
                                >

                                    <option value="USER">

                                        USER

                                    </option>

                                    <option value="ADMIN">

                                        ADMIN

                                    </option>

                                </select>

                            </div>

                            <button
                                className="btn btn-success w-100"
                            >

                                Register

                            </button>

                        </form>

                        <hr />

                        <p className="text-center">

                            Already have an account?

                            <br />

                            <Link to="/">

                                Login Here

                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Register;