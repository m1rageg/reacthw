import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from './UserContext';
import axios from 'axios';

const UserDetailPage = () => {
    const { userId } = useParams();
    const { user } = useUser();

    useEffect(() => {
        console.log('Current User:', user);

        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => {
                console.log('User Details:', response.data);
            })
            .catch(error => {
                console.error('Error fetching user details:', error);
            });
    }, [userId, user]);

    return (
        <div>
            <h2>User Details</h2>
            {user && <p>Logged in as: {user.name}</p>}
        </div>
    );
};

export default UserDetailPage;