import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <div className=" min-h-screen mt-20">
            <div className="flex gap-6 p-3 max-w-4xl mx-auto flex-col md:flex-row md:items-center">

                {/* left-side */}
                <div className="flex-1">
                    <Link className=" text-4xl font-bold dark:text-white" to={"/"}>
                        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 rounded-md text-white">{"Shamant's"}</span>Blog
                    </Link>
                    <p className="text-sm mt-5">This is a project build as a learning process by Shamant Myageri. You can sign up here with your email and password.</p>
                </div>

                {/* right-side */}
                <div className="flex-1">
                    <form className="flex flex-col gap-4">
                        <div className="">
                            <Label value="Username" />
                            <TextInput type="text" placeholder="Enter Username" id="username" />
                        </div>
                        <div className="">
                            <Label value="Email" />
                            <TextInput type="email" placeholder="Enter Email" id="email" />
                        </div>
                        <div className="">
                            <Label value="Password" />
                            <TextInput type="password" placeholder="Enter Password" id="password" />
                        </div>
                        <Button className="" gradientDuoTone="purpleToPink" type="submit" outline>Sign Up</Button>
                    </form>
                    <div className="flex gap-2 text-sm mt-4">
                        <span>have an account?</span>
                        <Link to="sign-in" className=" text-blue-600">Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
