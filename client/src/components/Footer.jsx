import { Footer } from "flowbite-react"
import { Link } from "react-router-dom"

export default function FooterComponent() {
    return (
        <Footer container className=" border rounded-none border-t-4 border-teal-400">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid w-full justify-between sm:flex md:grid-col-1">
                    <div className="">
                        <Link className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white" to={"/"}>
                            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 rounded-md text-white">{"Shamant's"}</span>Blog
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-4 sm:mt-0 sm:grid-cols-3 sm:gap-6">
                        <div className="">
                            <Footer.Title className="mb-4" title="About" />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href="/about"
                                    target="_blank"
                                >
                                    {"Shamant's "}Blog
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div className="">
                            <Footer.Title className="mb-4" title="Follow us" />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href="https://github.com/Sam-111001"
                                    target="_blank"
                                >
                                    Github
                                </Footer.Link>
                                <Footer.Link
                                    href="https://www.instagram.com/shamantmyageri/"
                                    target="_blank"
                                >
                                    Instagram
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div className="">
                            <Footer.Title className="mb-4" title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href="#"
                                >
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link
                                    href="#"
                                >
                                    Terms&Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="">
                    <Footer.Copyright href="#" by="Shamant's Blog" year={new Date().getFullYear()} />
                </div>
            </div>
        </Footer>
    )
}
