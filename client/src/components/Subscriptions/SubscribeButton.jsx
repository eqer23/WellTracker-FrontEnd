import React, { useState, useEffect } from 'react';
import './SubscribeButton.css';

const SubscribeButton =  ({ professionalId, isSubscribed, onSubscriptionChange }) => {
    const [subscribed, setSubscribed] = useState(isSubscribed);

    const toggleSubscription = async () => {
        const url = subscribed ? `/unsubscribe/${professionalId}` : `subscribe/${professionalId}`;
        const method = subscribed ? `POST` : `POST`;

        try {
            const response = await fetch(url, { method, credentials: `include`});
            const data = await response.json();
            if(response.ok){
                setSubscribed(!subscribed);
                onSubscriptionChange();
            } else {
                throw new Error(data.message); //might not be right
            }
        } catch {
            console.error('Subscription change failed: ', error);
        }
    };

    return (
        <button className='subscribe-button' onClick={toggleSubscription}>
            {subscribed ? 'Unsibscribe' : 'Subscribed'}
        </button>
    );
};

export default SubscribeButton;