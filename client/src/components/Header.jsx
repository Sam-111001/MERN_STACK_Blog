import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react"
import { Link, useLocation } from "react-router-dom"
import { AiOutlineSearch } from "react-icons/ai"
import { FaMoon, FaSun } from "react-icons/fa"
import { useSelector, useDispatch } from "react-redux"
import { toggleTheme } from "../redux/theme/themeSlice"


export default function Header() {
    const path = useLocation().pathname
    const dispatch = useDispatch()
    const { currentUser } = useSelector(state => state.user)
    const { theme } = useSelector(state => state.theme)
    return (
        <Navbar className="border-b-2 w-full">
            <Link className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white" to={"/"}>
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 rounded-md text-white">{"Shamant's"}</span>Blog
            </Link>
            <form>
                <TextInput
                    type='text'
                    placeholder='Search...'
                    rightIcon={AiOutlineSearch}
                    className="hidden lg:inline"
                />
            </form>
            <Button className="w-12 h-10 border lg:hidden" color="grey" pill >
                <AiOutlineSearch />
            </Button>
            <div className="flex gap-2 md:order-2">
                <Button className="w-12 h-10 hidden sm:inline border " color="grey" pill onClick={() => dispatch(toggleTheme())}>
                    {theme === "light" ? <FaMoon /> : <FaSun />}
                </Button>
                {currentUser ?
                    (
                        <Dropdown arrowIcon={false} inline label={<Avatar alt="user" img={currentUser.profilePicture} rounded />}>
                            <Dropdown.Header>
                                <span className="block text-sm">@{currentUser.username}</span>
                                <span className="block text-sm font-medium truncate">{currentUser.email}</span>
                            </Dropdown.Header>
                            <Link to="/dashboard?tab=profile">
                                <Dropdown.Item >Profile</Dropdown.Item>
                            </Link>
                            <Dropdown.Divider />
                            <Dropdown.Item>Sign out</Dropdown.Item>
                        </Dropdown>
                    ) :
                    (<Link to={"/sign-in"}>
                        <Button className=" outline" gradientDuoTone={"purpleToBlue"}  >
                            Sign In
                        </Button>
                    </Link>
                    )}
                <Navbar.Toggle className=" border" />
            </div>
            <Navbar.Collapse className="">
                <div className="md:flex gap-16 text-base items-center">
                    <Navbar.Link active={path === "/"} as={"div"}>
                        <Link className="block" to={"/"}>
                            Home
                        </Link>
                    </Navbar.Link>
                    <Navbar.Link active={path === "/about"} as={"div"}>
                        <Link className="block" to={"/about"}>
                            About
                        </Link>
                    </Navbar.Link>
                    <Navbar.Link active={path === "/projects"} as={"div"}>
                        <Link className="block" to={"/projects"}>
                            Projects
                        </Link>
                    </Navbar.Link>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}
