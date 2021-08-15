import React from 'react';
import "./CandyList.css";

import CandyListing from './CandyListing';

export default function CandyList(props){
    return (
        <ul>
            <li>
                <CandyListing name="Skittles" price="$1.00" />
            </li>
            <li>
                <CandyListing name="Maltesers" price="$1.50" />
            </li>
        </ul>
    )
}