import { NavLink } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center min-h-screen grid place-items-center">
            <div>
            <h1 className="text-9xl font-bold">404</h1>
            <h5 className="text-2xl">Page Not Found :( </h5>
            <button>
                <NavLink className='mt-5 btn btn-ghost' to='/'>Back Home</NavLink>
            </button>
            </div>
        </div>
    )
}

export default Error;