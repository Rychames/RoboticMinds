import React from 'react';
import imgGenerica from '../images/imgGenericaFoto.png'
import { getApiURL } from '../scripts/authService';

const apiURL = getApiURL()

const Users = ({ item, style }) => {
    return (
        <div className={`custom-card d-flex flex-column mt-5 ${style}`} style={{ width: "13rem" }}>
            {item.profile_picture ? (
                <img src={`${apiURL}${item.profile_picture}`} className={`card-img-top align-self-center mt-3 custom-img ${style}`} alt='img' />
            ) : (
                <img src={imgGenerica} className={`card-img-top align-self-center mt-3 custom-img ${style}`} alt="Generic profile picture" />
            )}
            <div className="custom-body mt-3 text-center">
                <h5 className="custom-title" > {item.username ? (item.username): (item.title)} </h5>
            </div>
        </div> 
    );
};

export default Users;

