
import React, {useState} from "react";
import { Link } from 'react-router-dom';

function UserAfter() {
    let handdleCloseAccount=() =>{
        localStorage.removeItem("token")
        localStorage.removeItem("rol")
        window.location.reload()
    }
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <div className='icon f_flex width items-center'>
            {/* <Link to='/user'> */}
            <i className="bg-gray-100 p-2 rounded-full" onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"
            />
          </svg>
        </i>
            <div className="navbar">
         
            <div className={`nav_items ${isOpen && "open"}`}>

            <div className="buttonsAfter">
                <div className="superior">
                <p onClick={ () => setIsOpen(!isOpen)}><Link to='/PageUser'>Mi cuenta</Link></p>
                
                </div>
                <button className='closeSection'  onClick={ () => setIsOpen(!isOpen)}><span  onClick={handdleCloseAccount}>Cerrar sesión</span></button>
            </div> 
            </div>
                
            </div>
            </div>
    </>
  )
}

export default UserAfter