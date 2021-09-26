import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const {cart} = props;
    const totalSalary = cart.reduce( (previous, current) => previous + current.salary, 0);
    return (
        <div className="cart">
            <div className="cart-length">
                <h5 style={{color: '#49a6e9'}}><span><FontAwesomeIcon icon={faUser} /></span> Developer Added: {cart.length}</h5>  
                <h5>Total Pay Salary: ${totalSalary}</h5> 
            </div>
            <div >
                { 
                    cart.map((info, i) => <div key={info.id}> 
                        <div className="cart-info">
                            <div className="cart-img">
                                <img className="w-100 rounded-circle" src={info.img} alt="" />
                            </div>
                            <div>
                                <p><strong>Name: </strong>{info.name}</p>
                                <p><strong>Serial No:</strong> {i + 1}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Cart;