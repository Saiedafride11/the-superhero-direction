import React, { useState, useEffect} from 'react';
import './User.css';
import UserSummary from '../UserSummary/UserSummary';
import Cart from '../Cart/Cart';

const User = () => {
    const [users, setUsers] = useState([]);
    const [cart, setCart] = useState([])

    useEffect( () => {
        fetch('./users.JSON')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    const handleUserAdded = (user) => {
        // console.log('User added', user);
        const newCart = [...cart, user];
        setCart(newCart)
    }
    return (
        <div className="user-container">
            <div className="user">
                {
                    users.map(user => <UserSummary
                        user={user}
                        key={user.id}
                        handleUserAdded={handleUserAdded}>
                    </UserSummary>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default User;