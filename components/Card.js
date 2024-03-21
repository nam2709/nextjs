import React from 'react';
import Link from 'next/link';

const Card = ({ id, name }) => {
    const imageUrl = `https://shaded-adorable-doll.glitch.me/image/${id}`;
    return (
        <div className='tc bg-light-red dib br3 pa3 ma2 bw2 shadow-5' style={{ maxWidth: '350px', display: "inline-block", margin: "50px" }}>
            {/* <img alt='robots' src={`https://robohash.org/${id}?size=200x200`}/> */}
            <img 
                alt='robots' 
                src={imageUrl}
                style={{ width: "300px", height: "300px" }}
            />
            <div>
            <Link href={`/detail/${id}`}>
                <h2>{name}</h2>
            </Link>
            </div>
        </div>
    );
}

export default Card;