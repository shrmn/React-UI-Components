import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function Card () {
    return (
        <div>
            <CardBanner />
            <CardContent />
        </div>
    );
};

export default Card;