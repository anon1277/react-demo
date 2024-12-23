import { useState } from "react";
import User from "../User";

const DynamicProfile = () => {

    // State to manage card styles (border, width, shadow, padding, and margin)
    const [Cardstyle, setCardstyle] = useState({
        border: "1px solid black", 
        width: "200px", 
        boxShadow: "1px 2px 3px 0px black", 
        padding: "5px", 
        margin: "20px"
    });

    // List of users with name and position data
    const UserList = [
        { name: "Anon 1277", position: "Software Developer" },
        { name: "Umang Prajapati", position: "Software Developer" },
        { name: "Kirti Solanki", position: "Mobile Application Developer" },
        { name: "Jayesh Vaghela", position: "Graphics Designer" },
        { name: "Vipul Kumar", position: "Salesforce Developer" },
        { name: "Ravi Desai", position: "UI-UX Designer" },
        { name: "Niral Modi", position: "Designer" }
    ];

    // State to manage the text color in profile cards
    const [textColor, settextColor] = useState('black');

    // State to toggle between grid and block layout
    const [grid, setgrid] = useState(true);

    // Function to set the theme by changing background and text color
    const Settheme = (bgColor, textColor) => {
        // Update card background color and text color
        setCardstyle({...Cardstyle, backgroundColor: bgColor});
        settextColor(textColor);
    };

    return (
        <div>
            <h1>Dynamic User Profile Example</h1>

            {/* Button to set grey theme with green text */}
            <button onClick={() => Settheme('gray', 'green')} style={{ color: '#cccc', background: "grey" }}>
                Set Grey Theme
            </button>

            {/* Button to set default theme (white background with black text) */}
            <button onClick={() => Settheme('white', 'black')} style={{ color: 'white', background: "black" }}>
                Set Default Theme
            </button>

            {/* Button to toggle grid layout (flex/block) */}
            <button onClick={() => setgrid(!grid)}>Toggle Grid</button>

            {/* Flex container to display user profile cards */}
            <div style={{ display: grid ? "flex" : "block", flexWrap: "wrap" }}>
                
                {/* Loop through the UserList to display dynamic user profiles */}
                {
                    UserList.map((User, index) => (
                        <div key={index} style={Cardstyle}>
                            {/* Display user profile picture */}
                            <img 
                                style={{ width: "200px" }} 
                                src="https://as2.ftcdn.net/v2/jpg/01/12/09/17/1000_F_112091769_vWEmDiwVIpO4H1plGuhYgnmduTuiGUh2.jpg" 
                                alt="Profile" 
                            />
                            {/* Display user name and position */}
                            <div style={{ color: textColor }}>
                                <h3>{User.name}</h3>
                                <p>{User.position}</p>
                            </div>
                        </div>
                    ))
                }

            </div>

            <hr />
        </div>
    );
}

export default DynamicProfile;
