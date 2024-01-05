import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserListPage from './pages/UserList.jsx';
import UserDetailPage from './pages/UserDetails.jsx';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserListPage />} />
                <Route path="/user/:userId" element={<UserDetailPage />} />
            </Routes>
        </Router>
    );
};

export default App;