import React from 'react';
import "./CandyListing.css";

export default function CandyListing(props){
    return (
        <div>
            <p>{props.name} : ${props.price}</p>
        </div>
    )
}