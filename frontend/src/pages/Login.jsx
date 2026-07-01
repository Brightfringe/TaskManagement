import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/authService";

function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
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

            const response = await login(form);

            localStorage.setItem("token", response.data.token);

            navigate("/dashboard");

        } catch (error) {

            alert(error.response?.data?.message || "Login Failed");

        }

    };

    return (

        <div className="container">

            <div className="row justify-content-center align-items-center vh-100">

                <div className="col-md-5">

                    <div className="card shadow-lg p-4">

                        <h2 className="text-center mb-4">
                            Login
                        </h2>

                        <form onSubmit={handleSubmit}>

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

                            <button
                                className="btn btn-primary w-100"
                            >
                                Login
                            </button>

                        </form>

                        <hr />

                        <p className="text-center">

                            Don't have an account?

                            <br />

                            <Link to="/register">

                                Register Here

                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;