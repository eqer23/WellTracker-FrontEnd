import React, { useState, useEffect } from 'react';
import '.SubscriptionList.css';

const SubscriptionList = ({ userId, type }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = type === 'subscribers' ? `/subscribers/${userId}` : `/subscriptions/${userId}`;
            try {
                const response = await fetch(url, {crednetials: 'include'}); // AXIOS!!!!!
                const data = await response.json();
                if (response.ok) {
                    setUsers(data);
                } else {
                    throw new Error(data.message);
                }
            } catch (error) {
                console.error('Failed to fetch data: ', error);
            }
        };

        fetchData();
    }, [userId, type]);

    return (
        <div className='subscription-list'>
            {users.map(user => (
                <div key={user.id} className='user-item'>
                    {user.firstName} {user.lastName}
                </div>
            ))}
        </div>
    );
};

export default SubscriptionList;