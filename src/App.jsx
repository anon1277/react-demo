import { useState } from "react";
import Header from "./Heade";
import Userlogin, { Profile, Setting } from "./UserLogin";
import Todolist from "./Todolist";
import Color from "./Color";
import MultipleCondtion from "./MultipleCondition";
import User from "./User";
import Student from "./Studen";
import Wrapper from "./Wrapper";
import InputField from "./InputFiels";
import Skills from "./Skills";
import SelectGenderCityDropdown from "./SelectGenderCityDropdown";
import UserList from "./UserList";

const PageName = "Login Page";

function sum(val1, val2) {
  return val1 + val2;
}

function App() {
  const [color, setColor] = useState("red");
  const [displayProfile, setDisplay] = useState(true);
  const [showLogin, setLogin] = useState(false);
  const [student, setStudent] = useState("anon");

  const name = "Anon 1277";
  const age = 20;
  const email = "test@anon1277.com";

  const ChangeColor = () => {
    setColor("green");
  };

  return (
    <div>
      <Header />
      <h1>Welcome to {PageName}</h1>
      <button onClick={() => alert("Please enter Login Details")}>Login</button>
      <button onClick={ChangeColor}>Change Color</button>
      <button onClick={() => setDisplay(!displayProfile)}>Show Profile</button>

      {displayProfile && <Profile />}
      {showLogin && <Userlogin />}

      {/* user list */}
      <UserList />
      {/* //skill list */}
      <Skills />

      {/* gender and city */}
      <hr />
      
      <SelectGenderCityDropdown />
      
      <hr />
      
      <h1>Sum of 10 + 20: {sum(10, 20)}</h1>

      {student && <Student name={student} />}
      <hr />
      <Student />
      <hr />
      <button onClick={() => setStudent("rahul")}>Update Student Name</button>
      <hr />

      <Wrapper color="yellow">
        <h1>Hello Everyone</h1>
      </Wrapper>
      <hr />

      <Wrapper>
        <h1>Wrapper Example</h1>
      </Wrapper>
      <hr />

      <InputField />
      <hr />

      <User name={name} age={age} email={email} />
      <Apple />
      <Color />
      <Todolist />
      <MultipleCondtion />
    </div>
  );
}

// Apple Component
function Apple() {
  return <h1>Apple</h1>;
}

export default App;
