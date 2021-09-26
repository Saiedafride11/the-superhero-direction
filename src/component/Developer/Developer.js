import React, { useState, useEffect} from 'react';
import './Developer.css';
import DeveloperSummary from '../DeveloperSummary/DeveloperSummary';
import Cart from '../Cart/Cart';

const Developer = () => {
    const [developers, setDeveloper] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('./developers.JSON')
        .then(res => res.json())
        .then(data => setDeveloper(data))
    }, [])

    const handleDeveloperAdded = (developer) => {
        const existId = cart.find(addedId => addedId.id === developer.id);
        if (existId) {
            alert("This developer already added!!");
        }
        else {
            const newCart = [...cart, developer];
            setCart(newCart)
        }
    }
    return (
        <div className="developer-container">
            <div className="developer">
                {
                    developers.map(developer => <DeveloperSummary
                        developer={developer}
                        key={developer.id}
                        handleDeveloperAdded={handleDeveloperAdded}>
                    </DeveloperSummary>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Developer;