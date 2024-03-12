import React from 'react';
import imgGenerica from '../images/imgGenericaFoto.png'

const CardItem = ({ item, style }) => {
    return (
        <div className={`custom-card d-flex flex-column mt-5 ${style}`} style={{ width: "13rem" }}>
            <img src={imgGenerica} className={`card-img-top align-self-center mt-3 custom-img ${style}`} />
            <div className="custom-body mt-3 text-center">
                <h5 className="custom-title" >{item.title}</h5>
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
