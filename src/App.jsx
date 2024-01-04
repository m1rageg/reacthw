import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserListPage from './components/User/UserList.jsx';
import UserDetailPage from './components/User/UserDetails.jsx';

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