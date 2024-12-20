import { useState } from "react";

const Skills = () => {
  // Use useState instead of useEffect
  const [skills, setSkills] = useState([]);

  const handleCheck = (event) => {
    const { value, checked } = event.target;

    // Update the state based on the checkbox status
    setSkills((prevSkills) => {
      if (checked) {
        // Add the skill if checked
        return [...prevSkills, value];
      } else {
        // Remove the skill if unchecked
        return prevSkills.filter(skill => skill !== value);
      }
    });

    console.log(value, checked);
  };

  return (
    <div>
      <hr />
      <h1>Please Select your Skills</h1>

      <input type="checkbox" onChange={handleCheck} id="php" value="php" />
      <label htmlFor="php">PHP</label>
      <br />

      <input type="checkbox" onChange={handleCheck} id="python" value="python" />
      <label htmlFor="python">Python</label>
      <br />

      <input type="checkbox" onChange={handleCheck} id="js" value="js" />
      <label htmlFor="js">JavaScript</label>
      <br />

      <input type="checkbox" onChange={handleCheck} id="node" value="node" />
      <label htmlFor="node">Node.js</label>

     
      
      <h2>Your Selected Skills:</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default Skills;
