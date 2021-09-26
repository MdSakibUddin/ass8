import React from 'react';
import './AddedName.css';
const AddedName = (props) => {
    //destructuring
    const { id, name } = props.product;
    return (
        <div className="font-size">
            <h3>ID: {id}, Name: {name}</h3>
        </div>
    );
};

export default AddedName;