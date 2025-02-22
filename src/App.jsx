import { Profiler, useState } from "react";
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
import Clock from "./Clock";
import College from "./College";
import Callonce from "./useEffect/Callonce";
import PropWithUseEffect from "./useEffect/PropWithUseEffect";
import ComponentsLifeCycle from "./useEffect/ComponentsLifeCycle";
import ProfilePage from "./profile/ProfilePage";
import DynamicProfile from "./profile/DynamicProfile";
import ExternalCssDemo from "./profile/ExternalCssDemo";
import ProfileModuleCss from "./profile/ProfileModuleCss";
import styled from "styled-components";
const PageName = "Login Page";

// react Bootstrap Componenets
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form'
import UserefDemo from "./UseRef/UseRefDemo";
import UnControlledComponenets from "./UseRef/UnControlledComponenets";
import FunctionAsProps from "./FunctionAsProps";
import ForwardRef from "./UseRef/ForwardRef";
import UseFormstatus from "./form/UseFormstatus";
import UseTransitionDemo from "./useTransition/UseTransitionDemo";
import DerivedState from "./DerivedState/DerivedState";
import LiftingStateup from "./Lifting/LiftingStateup";
import UpdateObject from "./UpdateObject/UpdateObject";
import UpDateArray from "./UpDateArray/UpDateArray";
import UseidDeom from "./Useid/UseidDeom";
import CollegeContent from "./ContextApi/CollegeContent";
import { SubjectContentData } from "./ContextApi/Contextdata";
import useToogle from "./customhook/useToogle";
import { Link, Route, Routes } from "react-router";
import CollegeDetails from "./college-details/CollegeDetails";
import Department from "./college-details/Department";
import Result from "./college-details/Result";
// import UseActionStateDemo from "./UseActionState/UseActionState";

function sum(val1, val2) {
  return val1 + val2;
}

function App() {
  const [color, setColor] = useState("red");
  const [Clockcolor, setClockColor] = useState("red");
  const [count, setCount] = useState(0);
  const [DataWithProps, setDataWithProps] = useState(0);
  const [displayProfile, setDisplay] = useState(true);
  const [showLogin, setLogin] = useState(false);
  const [student, setStudent] = useState("anon");
  const [subject, setSubject] = useState("English"); //Context Api
  const [value,toogleValue] = useToogle(true)

  const name = "Anon 1277";
  const age = 20;
  const email = "test@anon1277.com";
  //styled component
  const Heading = styled.h1`  font-size: 1.5em;
  text-align: center;
  width:100%;
  color: palevioletred;
  background: papayawhip;
  border : solid 1px green
  border:radius :10px`

  //styled component
  const Heading2 = styled.h1({
    fontSize: "1.5em",
    textAlign: "center",
    color: "palevioletred",
    background: "papayawhip",

  })
  const ChangeColor = () => {
    setColor("green");
  };

  // display Username Name
  const displUsernameName = (name)=>{    
    alert(`User name: ${name}`); // Correct usage of alert
  }

  // display Username Name
  const GetUserName = (name)=>{    
    alert("Get User name Called")
  }
  console.log("value" ,value);
  
  return (
    <div style={styles.appContainer}>
      <Header />

      {/* Router Example */}

      {/* router Routes */}
      <Routes>
          <Route path="/skills"element={<Skills />} />
          <Route path="/college-data"element={<College />} />
          {/* College nested Routes */}
          <Route path="/college-details"element={<CollegeDetails />}>
              <Route path="student"element={<Student />} />
              <Route path="department"element={<Department />} />
              <Route path="result"element={<Result />} />
              <Route path="college-data"element={<College />} />
              
          </Route>
          <Route path="/skills"element={<Skills />} />
      </Routes>
      <hr />
      {/* Custom Hook Demo */}
         <button className="btn btn-primary m-3" onClick={toogleValue}>Toggle Heading</button>
         <button className="btn btn-primary m-3" onClick={()=>toogleValue(false)} >Hide Heading</button>
         <button className="btn btn-primary m-3" onClick={()=>toogleValue(true)}>Show Heading</button>
        
         {value ? 'Hello Toogle Showing' : ''}
      <hr />
      {/* Content API Demo */}
        <div style={{background:'yellow', padding:10}}>
          <SubjectContentData.Provider value={subject}>
           <label style={{ margin:10 }}>  Context API Demo </label>
            <select className="form-control" value={subject} onChange={(event)=>setSubject(event.target.value)} style={{ width:"150px" ,margin:10}}>
              <option value="Math">Select Subject</option>
              <option value="Math">Math</option>
              <option value="English">English</option>
              <option value="SS">SS</option>
              <option value="Science">Science</option>
            </select>
            {/* Clear Subject button */}
            <button className="btn btn-primary"  style={{ margin:10 }}  onClick={()=>setSubject('')}>Clear Subject</button>
            
            <CollegeContent />
          </SubjectContentData.Provider>
        <hr />
        </div>

      {/* Use id demo */}
       <UseidDeom /> 
       
      {/* <UseActionStateDemo /> */}
      {/* update Array Action */}
      {/* UpDateArray */}
      <UpDateArray />
      <hr />
        {/* Heading styled Components example */}
        <Heading>Welcome to Software Development Company</Heading>

      {/* N styled Components example */}

      <Heading2>Our expertise is in Web Development, Front-End Development, and Back-End Development</Heading2>
      <h1>Welcome to {PageName}</h1>
    {/* Use ActionState Form validation */}
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 form-control" controlId="formBasicPassword">
          <Form.Label> </Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Button
          style={{ margin: "10px" }} >Contact Us</Button>

      </Form>
      
      <hr />
      <UnControlledComponenets />
      <hr />
      <UserefDemo />
      <hr />
      {/* forward ref demo */}
      <ForwardRef />
      <hr />
      {/* UseFormstatus hook example */}
      <UseFormstatus />
      <hr />
      {/* UseTransitionDemo */}
      <UseTransitionDemo />
      <hr />
      {/* Derived state demo */}
      <DerivedState />
      <hr />
      <LiftingStateup />
      <hr />

      {/* object update */}
      <UpdateObject />
      <hr />


      <hr />
      <h1>Call Parent component function  from child component </h1>
      <FunctionAsProps displUsernameName={displUsernameName} GetUserName={GetUserName}  name="Anon 1277"/>
      <FunctionAsProps displUsernameName={displUsernameName} GetUserName={GetUserName} name="Lizard"/>

      <FunctionAsProps displUsernameName={displUsernameName}  GetUserName={GetUserName} name="Root"/>

      <FunctionAsProps displUsernameName={displUsernameName}  GetUserName={GetUserName} name="Blackhat"/>

      {/* Profile picture */}
      <ProfilePage />

      <hr />
      {/* Dynamic User Profile list */}
      <Heading>Our Software Development Team</Heading>

      <DynamicProfile />

      {/* external css demo */}
      <ExternalCssDemo />

      <hr />

      {/* Module css demo */}
      <ProfileModuleCss />

      <hr />
      {/* Buttons for basic interactions */}
      <div style={styles.buttonGroup}>
        <button onClick={() => alert("Please enter Login Details")}>Login</button>
        <button onClick={ChangeColor}>Change Color</button>
        <button onClick={() => setDisplay(!displayProfile)}>Show Profile</button>
      </div>

      {/* Conditional Rendering of Profile and Login */}
      {displayProfile && <Profile />}
      {showLogin && <Userlogin />}

      {/* Handle Props side Effect with useEffect in component */}
      <div style={styles.effectContainer}>
        <hr style={styles.separator} />
        <h1>Handle Props side Effect with useEffect</h1>
        <button onClick={() => setCount(count + 1)}>Update Counter</button>
        <button onClick={() => setDataWithProps(DataWithProps + 1)}>Update DataWithProps</button>
        <PropWithUseEffect count={count} data={DataWithProps} />
        <hr style={styles.separator} />
      </div>

      {/* ComponentsLifeCycle example */}
      <ComponentsLifeCycle />

      {/* College Details Section */}
      <College />
      <hr style={styles.separator} />

      {/* useEffect Demo Section */}
      <Callonce />

      {/* Digital Clock Section */}
      <div style={styles.clockContainer}>
        <select onChange={(event) => setClockColor(event.target.value)} style={styles.selectDropdown}>
          <option value="red">Red</option>
          <option value="pink">Pink</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
        <Clock color={Clockcolor} />
      </div>

      {/* Other Sections */}
      <UserList />
      <Skills />
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

// Styling object for the entire App
const styles = {
  appContainer: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    color: "#333",
  },
  buttonGroup: {
    marginBottom: "20px",
  },
  effectContainer: {
    backgroundColor: "#eeeeee",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  separator: {
    borderColor: 'green',
    borderWidth: '2px',
  },
  clockContainer: {
    marginTop: "20px",
  },
  selectDropdown: {
    marginBottom: "10px",
    padding: "10px",
    fontSize: "16px",
  },
};

export default App;
