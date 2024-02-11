import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
    const [formData, setFormData] = useState({})
    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let responseData = {}
        if (!formData.email || !formData.password) {
            return (setErrorMessage("Please fill all fields."))
        }

        try {
            setLoading(true);
            setErrorMessage(null);
            await fetch("http://localhost:3000/api/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            }).then((resp) => resp.json()).then((data) => responseData = data)
            console.log(responseData);
            if (responseData.success === false) {
                setErrorMessage(responseData.errorMessage);
            }
            setLoading(false)
            if (responseData.success) {
                navigate("/")
            }
        } catch (error) {
            setErrorMessage(error.message);
            setLoading(false)
        }
    }

    return (
        <div className=" min-h-screen mt-20">
            <div className="flex gap-6 p-3 max-w-4xl mx-auto flex-col md:flex-row md:items-center">

                {/* left-side */}
                <div className="flex-1">
                    <Link className=" text-4xl font-bold dark:text-white" to={"/"}>
                        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 rounded-md text-white">{"Shamant's"}</span>Blog
                    </Link>
                    <p className="text-sm mt-5">This is a project build as a learning process by Shamant Myageri. You can sign in here with your email and password.</p>
                </div>

                {/* right-side */}
                <div className="flex-1" >
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div className="">
                            <Label value="Email" />
                            <TextInput type="email" placeholder="Enter Email" id="email" onChange={handleChange} />
                        </div>
                        <div className="">
                            <Label value="Password" />
                            <TextInput type="password" placeholder="Enter Password" id="password" onChange={handleChange} />
                        </div>
                        <Button className="" gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
                            {loading ? (<><Spinner size="sm" /><span className="pl-3">Loading</span></>) : "Sign In"}
                        </Button>
                    </form>
                    <div className="flex gap-2 text-sm mt-4">
                        <span>{"don't"} have an account?</span>
                        <Link to="/sign-up" className=" text-blue-600">Sign up</Link>
                    </div>
                    {
                        errorMessage && (
                            <Alert className="mt-5" color="failure">
                                {errorMessage}
                            </Alert>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
