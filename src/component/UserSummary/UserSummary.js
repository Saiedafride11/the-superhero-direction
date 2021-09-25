import React from 'react';
import './UserSummary.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

const UserSummary = (props) => {
    const {img, name, gender, email, phone, salary} = props.user;
    return (
        <div className="user-summary">
           <div className="container">
                <div className="row row-cols-1 p-2">
                    <div className="card h-100">
                        <div className="user-img p-2">
                            <img className="img" src={img} alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p>Gender : {gender}</p>
                            <p>Email : {email}</p>
                            <p>Phone no : {phone}</p>
                            <p>Salary : {salary} Usd </p>
                            <button className="user-btn" onClick={() => props.handleUserAdded(props.user)}><FontAwesomeIcon icon={faHandHoldingUsd} /> Pay Salary</button>
                        </div>
                    </div>
                </div>
           </div>
        </div>

);
};

export default UserSummary;