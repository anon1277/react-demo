import { useState } from "react";
import './style.css';

/**
 * DerivedState Component
 * Demonstrates derived state calculations and dynamic list rendering.
 */
const DerivedState = () => {
    // State to store the input value for a new user
    const [user, setUser] = useState('');
    // State to maintain the list of added users
    const [users, setUsers] = useState([]);

    /**
     * Adds a new user to the list of users
     */
    const handleAddUser = () => {
        if (user.trim()) {
            setUsers([...users, user]);
            setUser(''); // Clear the input field after adding the user
        }
    };

    // Derived states
    const totalUsers = users.length; // Total number of users
    const lastUser = users[users.length - 1] || 'N/A'; // Last user in the list
    const uniqueUsers = [...new Set(users)].length; // Count of unique users

    return (
        <>
            <h1>DerivedState Demo</h1>
            <h2>Total Users: {totalUsers}</h2>
            <h2>Last User: {lastUser}</h2>
            <h2>Unique Total Users: {uniqueUsers}</h2>

            <div className="form-container">
                <div className="input-section">
                    <input
                        value={user}
                        onChange={(event) => setUser(event.target.value)}
                        className="form-control mt-2"
                        type="text"
                        placeholder="Add new User"
                    />
                </div>
                <div className="button-section">
                    <button className="btn btn-info mt-2" onClick={handleAddUser}>
                        Add New User
                    </button>
                </div>
                <div className="users-list">
                    {users.map((userData, index) => (
                        <h4 key={index} className="user-entry">{userData}</h4>
                    ))}
                </div>
            </div>
        </>
    );
};

export default DerivedState;
