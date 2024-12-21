// UserList component that displays a list of users in a table
const UserList = () => {
    // Sample data for users
    const UserData = [
        {
            id: 1,
            name: "test",
            age: 18,
            email: "test@test.in",
        },
        {
            id: 2,
            name: "rohan",
            age: 19,
            email: "rohan@test.in",
        },
        {
            id: 3,
            name: "rohit",
            age: 20,
            email: "rohit@test.in",
        },
        {
            id: 4,
            name: "virat",
            age: 21,
            email: "virat@test.in",
        },
        {
            id: 5,
            name: "pujara",
            age: 22,
            email: "pujara@test.in",
        },
        {
            id: 6,
            name: "siraj",
            age: 23,
            email: "siraj@test.in",
        },
        {
            id: 7,
            name: "jasprit",
            age: 24,
            email: "jasprit@test.in",
        },
        {
            id: 8,
            name: "jadeja",
            age: 25,
            email: "jadeja@test.in",
        },
    ];
    
    // JSX to render the User List in a table
    return (
        <div>
            {/* Horizontal line separator */}
            <hr />
            
            {/* Title of the page */}
            <h1>User List</h1>
            
            {/* Table to display user details */}
            <table border={1}>
                <thead>
                    <tr>
                        {/* Table headers */}
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Loop through the UserData array to create a table row for each user */}
                    {
                        UserData.map((user) => (
                            <tr key={user.id}>
                                {/* Display each user's id, name, age, and email */}
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

// Export the UserList component for use in other files
export default UserList;
