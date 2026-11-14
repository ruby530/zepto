import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    let navigate=useNavigate()
  return (
   <>
    <div className="navbar">
        <div className="logo">
            <h1>ZEPTO</h1>
            <p>⏱️Delivery in minutes🌟</p>
        </div>
        <div className="searchbar">
            <input type="text" placeholder='search something here..?'/> 
        </div>
        <div className="logincart">
            <button  title='login if not' onClick={()=>navigate(`/login`)}>login</button>
            <button title='view cart items' onClick={()=>navigate(`/addcart`)}>cart</button>
        </div>
    </div>
   </>
  )
}

export default NavBar



// import React from 'react';
// import { useNavigate } from 'react-router-dom';


// const NavBar = () => {
//     let navigate = useNavigate();

//     return (
//         <div className="navbar">

//             <div className="logo">
//                 <h1>ZEPTO</h1>
//                 <p>⏱️ Delivery in minutes 🌟</p>
//             </div>

//             <div className="searchbar">
//                 <input
//                     type="text"
//                     placeholder="Search something here...?"
//                 />
//             </div>

//             <div className="logincart">
//                 <button onClick={() => navigate('/login')}>
//                     Login
//                 </button>

//                 <button onClick={() => navigate('/addcart')}>
//                     Cart
//                 </button>
//             </div>

//         </div>
//     );
// };

// export default NavBar;
