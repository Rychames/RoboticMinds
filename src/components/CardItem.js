import React from 'react';
import imgGenerica from '../images/imgGenericaFoto.png'
import { getApiURL } from '../scripts/apiUrls';

const apiURL = getApiURL()

const CardItem = ({ item, style }) => {
    const user = item
    return (
        <div className={`custom-card d-flex flex-column mt-5 ${style}`} style={{ width: "13rem" }}>
            {user.profile_picture ? (
                <img src={`${apiURL}${user.profile_picture}`} className={`card-img-top align-self-center mt-3 custom-img ${style}`} alt='img' />
            ) : (
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img src={imgGenerica} className={`card-img-top align-self-center mt-3 custom-img ${style}`} alt="Generic profile picture"/>
            )}
            <div className="custom-body mt-3 text-center">
                <h5 className="custom-title" > {user.username ? (user.username): (user.title)} </h5>
            </div>
        </div> 
    );
};

export default CardItem;




// import React from 'react';
// import imgGenerica from '../images/imgGenericaFoto.png'

// const CardItem = ({ item }) => {
//     return (
//         <div className="custom-card mt-5" style={{ width: "13rem" }}>
//             <img src={imgGenerica} className="card-img-top mt-3" alt="..." />
//             <div className="custom-body mt-3 text-center">
//                 <h5 className="custom-title">{item.title}</h5>
//             </div>
//         </div> 
//     );
// };

// export default CardItem;
