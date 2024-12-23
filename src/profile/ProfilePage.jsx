import { useState } from "react";

const ProfilePage = () => {

    // State to manage card styles (border, width, shadow, padding, and margin)
    const [Cardstyle, setCardstyle] = useState({
        border: "1px solid black", 
        width: "200px", 
        boxShadow: "1px 2px 3px 0px black", 
        padding: "5px", 
        margin: "20px"
    });

    // State to manage the text color in profile cards
    const [textColor, settextColor] = useState('black');

    // State to toggle between grid and block layout
    const [grid, setgrid] = useState(true);

    // Function to set the theme by changing background and text color
    const Settheme = (bgColor, textColor) => {
        setCardstyle({...Cardstyle, backgroundColor: bgColor}); // Update background color
        settextColor(textColor); // Update text color
    }

    return (
        <div>
            <h1>Profile picture example</h1>

            {/* Button to set grey theme */}
            <button onClick={() => Settheme('gray', 'green')} style={{ color: '#cccc', background: "grey" }}>
                Set grey Theme
            </button>
            
            {/* Button to set default theme */}
            <button onClick={() => Settheme('white', 'black')} style={{ color: 'white', background: "black" }}>
                Set Default Theme
            </button>

            {/* Button to toggle grid layout */}
            <button onClick={() => setgrid(!grid)}>Toggle grid</button>

            {/* Flex container to arrange profile cards */}
            <div style={{ display: grid ? "flex" : "block", flexWrap: "wrap" }}>
                
                {/* Profile card */}
                <div style={Cardstyle}>
                    <img style={{ width: "200px" }} src="https://as2.ftcdn.net/v2/jpg/01/12/09/17/1000_F_112091769_vWEmDiwVIpO4H1plGuhYgnmduTuiGUh2.jpg" alt="Profile picture" />
                    <div style={{ color: textColor }}>
                        <h3>Anon 1277</h3>
                        <p>Software Developer</p>
                    </div>
                </div>

                {/* Repeat profile card structure */}
                <div style={Cardstyle}>
                    <img style={{ width: "200px" }} src="https://as2.ftcdn.net/v2/jpg/01/12/09/17/1000_F_112091769_vWEmDiwVIpO4H1plGuhYgnmduTuiGUh2.jpg" alt="Profile picture" />
                    <div style={{ color: textColor }}>
                        <h3>Anon 1277</h3>
                        <p>Software Developer</p>
                    </div>
                </div>

                <div style={Cardstyle}>
                    <img style={{ width: "200px" }} src="https://as2.ftcdn.net/v2/jpg/01/12/09/17/1000_F_112091769_vWEmDiwVIpO4H1plGuhYgnmduTuiGUh2.jpg" alt="Profile picture" />
                    <div style={{ color: textColor }}>
                        <h3>Anon 1277</h3>
                        <p>Software Developer</p>
                    </div>
                </div>

                <div style={Cardstyle}>
                    <img style={{ width: "200px" }} src="https://as2.ftcdn.net/v2/jpg/01/12/09/17/1000_F_112091769_vWEmDiwVIpO4H1plGuhYgnmduTuiGUh2.jpg" alt="Profile picture" />
                    <div style={{ color: textColor }}>
                        <h3>Anon 1277</h3>
                        <p>Software Developer</p>
                    </div>
                </div>

                <div style={Cardstyle}>
                    <img style={{ width: "200px" }} src="https://as2.ftcdn.net/v2/jpg/01/12/09/17/1000_F_112091769_vWEmDiwVIpO4H1plGuhYgnmduTuiGUh2.jpg" alt="Profile picture" />
                    <div style={{ color: textColor }}>
                        <h3>Anon 1277</h3>
                        <p>Software Developer</p>
                    </div>
                </div>

                <div style={Cardstyle}>
                    <img style={{ width: "200px" }} src="https://as2.ftcdn.net/v2/jpg/01/12/09/17/1000_F_112091769_vWEmDiwVIpO4H1plGuhYgnmduTuiGUh2.jpg" alt="Profile picture" />
                    <div style={{ color: textColor }}>
                        <h3>Anon 1277</h3>
                        <p>Software Developer</p>
                    </div>
                </div>

                <div style={Cardstyle}>
                    <img style={{ width: "200px" }} src="https://as2.ftcdn.net/v2/jpg/01/12/09/17/1000_F_112091769_vWEmDiwVIpO4H1plGuhYgnmduTuiGUh2.jpg" alt="Profile picture" />
                    <div style={{ color: textColor }}>
                        <h3>Anon 1277</h3>
                        <p>Software Developer</p>
                    </div>
                </div>

                <div style={Cardstyle}>
                    <img style={{ width: "200px" }} src="https://as2.ftcdn.net/v2/jpg/01/12/09/17/1000_F_112091769_vWEmDiwVIpO4H1plGuhYgnmduTuiGUh2.jpg" alt="Profile picture" />
                    <div style={{ color: textColor }}>
                        <h3>Anon 1277</h3>
                        <p>Software Developer</p>
                    </div>
                </div>
            </div>

            <hr />
        </div>
    );
}

export default ProfilePage;
