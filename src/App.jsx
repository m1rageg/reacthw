import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserListPage from './pages/UserList';
import UserDetailPage from './pages/UserDetails';
import { UserProvider } from './pages/UserContext';

const App = () => {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<UserListPage />} />
                    <Route path="/user/:userId" element={<UserDetailPage />} />
                </Routes>
            </Router>
        </UserProvider>
    );
};

export default App;