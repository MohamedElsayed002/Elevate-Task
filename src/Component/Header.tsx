import { NavLink } from "react-router-dom"

const Header = () => {





    return (
        <header className="w-4/5 py-10 mx-auto flex justify-between">
                <NavLink to='/'>
                    <h1>SHOPPING</h1>
                </NavLink>
                <ul className="flex gap-5">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                </ul>
        </header>
    )
}

export default Header