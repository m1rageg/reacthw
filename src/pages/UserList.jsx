import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from './UserContext';

const UserListPage = () => {
    const { user, setLoggedInUser } = useUser();

    useEffect(() => {
        setLoggedInUser({ id: 1, name: 'John Doe' });
    }, [setLoggedInUser]);

    return (
        <div>
            <h2>User List</h2>
            {user && <p>Logged in as: {user.name}</p>}
            <ul>
                <li>
                    <Link to="/user/1">User 1</Link>
                </li>
                <li>
                    <Link to="/user/2">User 2</Link>
                </li>
            </ul>
        </div>
    );
};

export default UserListPage;