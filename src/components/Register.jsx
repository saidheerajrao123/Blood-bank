import React from "react"
import { FaUserAlt } from "react-icons/fa"
import { FaLock } from "react-icons/fa"
function Register() {
  return (
    <div>
      <form className="w-50 mx-auto mt-5" >
        <div className="mb-3">
          <label className="form-label" htmlFor="un">
            Username
          </label>
          <input className="form-control" type="text" id="un" />
          <FaUserAlt className="icon" />
        </div>
        <div className="mb-3">
          <label htmlFor="pw">Password</label>
          <input className="form-control" type="password" id="pw" />
          <FaLock className="icon" />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="bg">
            Blood Group
          </label>
          <select id="">
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Register
