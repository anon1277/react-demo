import CollegeStudent from "./ColegeStuden";

const College = () => {
    // College data
    const CollegeData = [
      {
        name: "GPG",
        city: "Gandhinagar",
        website: "gpg.com",
        // Student data
        student: [
          { name: "Anonn", age: '21', email: "test.com" },
          { name: "Rohit", age: '35', email: "rohit@test.com" },
          { name: "Virat", age: '36', email: "virat@test.com" },
          { name: "Jadeja", age: '36', email: "jadegs@test.com" }
        ]
      },
      {
        name: "GECG",
        city: "Gandhinagar",
        website: "gecg.com",
        student: [
          { name: "Kirti", age: '21', email: "kirti@gecp.com" },
          { name: "Jayesh", age: '35', email: "jayesh@test.com" },
          { name: "Rohit", age: '36', email: "rohit@test.com" },
          { name: "Ajay", age: '36', email: "jadegs@test.com" }
        ]
      },
      {
        name: "GECP",
        city: "Patan",
        website: "gecp.com",
        student: [
          { name: "Prahlad", age: '21', email: "prahlad@test.com" },
          { name: "Tarif", age: '35', email: "tarif@test.com" },
          { name: "Bharat", age: '36', email: "bharat@test.com" },
          { name: "Akashya", age: '36', email: "akashya@test.com" }
        ]
      }
    ];
  
    return (
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#f4f7f6" }}>
        <h1 style={{ textAlign: "center", color: "#2c3e50" }}>College Data with Nested Loop Demo</h1>
  
        {/* Render the college data */}
        {CollegeData.map((college, index) => (
          <div key={index} style={{
            marginBottom: "40px",
            border: "1px solid #ddd",
            backgroundColor: "#ecf0f1",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            color:"green"
          }}>
            <h2 style={{ color: "#2980b9" }}>{college.name}</h2>
            <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
              <li><strong>City:</strong> {college.city}</li>
              <li><strong>Website:</strong> <a href={`http://${college.website}`} target="_blank" rel="noopener noreferrer" style={{ color: "#2980b9" }}>{college.website}</a></li>
            </ul>
  
            <h3 style={{ color: "#2c3e50" }}>Students</h3>
            {college.student.length === 0 ? (
              <p>No students available.</p>
            ) : (
                <CollegeStudent student={college.student} />
            )}
          </div>
        ))}
      </div>
    );
  }
  
  export default College;
  