import React, { useState, useEffect } from 'react';
import './SubscriptionList.css';
import axios from 'axios';

const SubscriptionList = ({ userId, type }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const url = type === 'subscribers' ? `/subscribers/${userId}` : `/subscriptions/${userId}`;
            setLoading(true);

            try {
                const response = await axios.get(url, { withCredentials: true});
                setUsers(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch data: ', error);
                setError("Failed to load data");
                setLoading(false);
            }
        };

        fetchData();
    }, [userId, type]);

    return (
        <div className='subscription-list'>
            {loading ? <p>Loading...</p> : error ? <p>Error: {error}</p> :
                users.map(user => (
                    <div key={user._id} className='user-item'>
                        {user.firstName} {user.lastName}
                    </div>
                ))
            }
        </div>
    );
};

export default SubscriptionList;