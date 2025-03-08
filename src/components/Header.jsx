import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className="bg-danger text-white py-4">
        <ul className='nav justify-content-end'>
            <li className="nav-item">
                <Link to="" className='nav-link text-white'>Home</Link>
            </li>
            <li className="nav-item">
                <Link to="register" className="nav-link text-white">Register</Link>
            </li>
            <li className="nav-item">
                <Link to="login" className='nav-link text-white'>Login</Link>
            </li>
            <li className="nav-item">
                <Link to="technologies" className="nav-link text-white">Technologies</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header