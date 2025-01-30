import { useState } from "react";

// Component to manage user names and user details (name and age)
const UpdateArray = () => {
    // State for storing a list of user names
    const [name, setName] = useState([
        'anon', 'blackhat', 'testuser',
    ]);

    // State for storing user details as an array of objects
    const [dataDetails, setDataDetails] = useState([
        { 'name': "test user", age: 20 },
        { 'name': "anon", age: 21 },
        { 'name': "black hat", age: 22 },
        { 'name': "Grey Hat", age: 23 },
        { 'name': "Red Hat", age: 24 },
    ]);

    // Function to handle updating the last username in the list
    const handleChange = (username) => {
        name[name.length - 1] = username;
        setName([...name]); // Trigger state update by creating a new array
    };

    // Function to handle updating the last user's age in the details list
    const handleAge = (age) => {
        dataDetails[dataDetails.length - 1].age = age;
        setDataDetails([...dataDetails]); // Trigger state update by creating a new array
    };

    return (
        <div style={styles.container}>
            {/* Displaying the list of user names */}
            <div style={styles.namesList}>
                {name.map((item, index) => (
                    <h1 key={index} style={styles.nameItem}>{item}</h1>
                ))}
            </div>

            {/* Input field to update the last user name */}
            <input
                className="form-control"
                placeholder="Enter Last User name"
                type="text"
                onChange={(e) => handleChange(e.target.value)}
                style={styles.inputField}
            />
            <button
                className="btn btn-primary mt-3"
                onClick={() => { setName(['black hat']) }}
                style={styles.updateButton}
            >
                Update name
            </button>
            <hr style={styles.divider} />

            {/* Displaying user details (name and age) */}
            <h1 style={styles.sectionTitle}>User Object</h1>
            <div style={styles.userDetails}>
                {dataDetails.map((item, index) => (
                    <div className="text-info" key={index} style={styles.userDetailItem}>
                        <h4>Name: {item.name}, Age: {item.age}</h4>
                        <hr className="text-danger" style={styles.divider} />
                    </div>
                ))}
            </div>

            {/* Input field to update the last user's age */}
            <input
                className="form-control"
                placeholder="Enter Last User Age"
                type="text"
                onChange={(e) => handleAge(e.target.value)}
                style={styles.inputField}
            />

            <hr style={styles.divider} />
        </div>
    );
}

// Styling for the component
const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        maxWidth: '600px',
        margin: '0 auto',
    },
    namesList: {
        marginBottom: '20px',
    },
    nameItem: {
        color: '#333',
        fontSize: '20px',
        fontWeight: 'bold',
    },
    inputField: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '4px',
        border: '1px solid #ddd',
        fontSize: '16px',
    },
    updateButton: {
        padding: '10px 15px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '4px',
        color: '#fff',
        cursor: 'pointer',
    },
    sectionTitle: {
        fontSize: '24px',
        marginBottom: '15px',
        color: '#333',
    },
    userDetails: {
        marginBottom: '20px',
    },
    userDetailItem: {
        marginBottom: '10px',
        padding: '10px',
        backgroundColor: '#e9f7fd',
        borderRadius: '5px',
    },
    divider: {
        borderColor: '#ddd',
    }
};

export default UpdateArray;
