import React from "react"

const ListStatBlock = ({ list, name }) => {
    return (
        <div className="stat-block list">
            <ul>{
                list.map((item, index) => <li key={index}>{item}</li>)
            }</ul>
            <p>{name}</p>
        </div>
    );
};

export default ListStatBlock;