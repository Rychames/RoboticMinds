import React from 'react';
import CardItem from './CardItem';

const CardList = ({ items = [], style }) => {
  return (
    <div className={`container ${style}`}>
      <div className="row">
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <div className="col mb-4 d-flex justify-content-center" key={index}>
              <CardItem item={item} style={style} />
            </div>
          ))
        ) : (
          <div className="col mb-4 d-flex justify-content-center">
            <p>No items available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardList;






// import React from 'react';
// import CardItem from './CardItem';

// const CardList = ({ items }) => {
//  return (
//     <div className="container">
//       <div className="row">
//         {items.map((item, index) => (
//           <div className="col mb-4 d-flex justify-content-center" key={index}> {/* Adiciona margem inferior para separar as linhas */}
//             <CardItem item={item} />
//           </div>
//         ))}
//       </div>
//     </div>
//  );
// };

// export default CardList;
