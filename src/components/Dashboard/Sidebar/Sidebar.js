import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faShoppingBasket, faCommentDots, faPlus, faUserCog, faGripHorizontal } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../images/logos/logo.png'
import { UserContext } from '../../../App';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setAdmin(data))

    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2  px-4 "  style={{ height: "100vh" }}>
            <ul className="list-unstyled p-5">  
                <img src={logo} style={{height:'50px'}} className="mb-5" alt=""/> 
                        
                    <li>
                        <Link to="/dashboard" className="text-success">
                         <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/servicelist" className="text-success">
                            <FontAwesomeIcon icon={faShoppingBasket} /> <span>serviceList</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/review" className="text-success">
                            <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                        </Link>
                    </li>

                 {/* { admin && <div> */}
                   <li>
                        <Link to="/allservicelist" className="text-success" >
                            <FontAwesomeIcon icon={faShoppingBasket} /> <span>AllServiceList</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addservice" className="text-success" >
                            <FontAwesomeIcon icon={faPlus} /> <span>AddService</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeadmin" className="text-success" >
                            <FontAwesomeIcon icon={faUserCog} /> <span>MakeAdmin</span>
                        </Link>
                    </li>
                 {/* </div>} */}
            </ul>
        </div>
    );
};

export default Sidebar;