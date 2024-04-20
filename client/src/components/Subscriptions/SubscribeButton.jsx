import React, { useState, useEffect } from 'react';
import './SubscribeButton.css';
import axios from 'axios';

let URL = import.meta.env.VITE_SERVER_URL;

const SubscribeButton =  ({ professionalId, isSubscribed, onSubscriptionChange }) => {
    const [subscribed, setSubscribed] = useState(isSubscribed);

    useEffect(() => {
        setSubscribed(isSubscribed);
    }, [isSubscribed]);

    const toggleSubscription = async () => {
        console.log(subscribed);
        const url = `${URL}${ subscribed ? 'unsubscribe' : 'subscribe'}/${professionalId}}`;
        const method = 'POST';

        try {
            const response = await axios.post(url, {}, {
                withCredentials: true,
                headers: {
                    'Authorization' : `Bearer ${localStorage.getItem('session-token')}`
                }
            });

            if(response.status === 200){
                setSubscribed(!subscribed);
                onSubscriptionChange();
            } else {
                throw new Error(data.message); //might not be right
            }
        } catch(error) {
            console.error('Subscription change failed: ', error);
            alert( error.response ? error.response.data.message : error.message);
        }
    };

    return (
        <button className='subscribe-button' onClick={toggleSubscription}>
            {subscribed ? 'Unsubscribe' : 'Subscribe'}
        </button>
    );
};

export default SubscribeButton;