import React from 'react';
import Users from './users';

const Ttt = ({ items, style }) => {
 return (
    <div className={`container ${style}`}>
      <div className="row">
        {items.map((item, index) => (
          <div className="col mb-4 d-flex justify-content-center" key={index}>
            <Users item={item} style={style} />
          </div>
        ))}
      </div>
    </div>
 );
};

export default Ttt;
