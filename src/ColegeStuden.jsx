// list college student 
const CollegeStudent = ({student})=>{
    return(
        <div>
            <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                {student.map((student, index) => (
                  <li key={index} style={{
                    marginBottom: "10px",
                    padding: "15px",
                    backgroundColor: "#fff",
                    color: "#34495e",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                  }}>
                    <p><strong>Student Name:</strong> {student.name}</p>
                    <p><strong>Student Age:</strong> {student.age}</p>
                    <p><strong>Student Email:</strong> <a href={`mailto:${student.email}`} style={{ color: "#e74c3c" }}>{student.email}</a></p>
                  </li>
                ))}
              </ul>
        </div>
    )
}

export default CollegeStudent;