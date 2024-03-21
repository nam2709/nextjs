import React from 'react';
import Card from './Card';



const Cardlist = ({robots}) => {
    // if (true) {
    //     throw new Error('NOOOOO');
    // }
    const cardComponent = robots.map((user, i) => {
        return  (<Card 
        key={i} 
        id={robots[i].id} 
        name={robots[i].name} 
        // email={robots[i].email}
        />
        );
    })
    return (
        <div style={{marginLeft: "200px", display: "inline-block"}}>
            {cardComponent}
        </div>
    );
}

export default Cardlist