import { useState } from "react";

// Component to select gender and city from dropdown and radio buttons
const SelectGenderCityDropdown = () => {
  
    // State to store selected gender, default is 'male'
    const [gender, setGender] = useState('male');

    // State to store selected city, default is 'mansa'
    const [city, setCity] = useState('mansa');
  
    // Handler to update gender state based on selected radio button
    const handleGender = (event) => {
        setGender(event.target.value);  
    }

    // Handler to update city state based on selected dropdown option
    const handleCity = (event) => {
        setCity(event.target.value);  
    }
  
    return (
        <div>

            {/* Gender Selection */}
            <h1>Select Gender</h1>
            <br />

            {/* Male Radio Button */}
            <input 
                type="radio" 
                onChange={handleGender} 
                value="male" 
                name="gender" 
                checked={gender === 'male'}  
                id="male" 
            />
            <label htmlFor="male">Male</label> 

            {/* Female Radio Button */}
            <input 
                type="radio" 
                name="gender" 
                onChange={handleGender} 
                checked={gender === 'female'} 
                value="female" 
                id="female" 
            />
            <label htmlFor="female">Female</label> 

            {/* Display selected gender */}
            <h1>Selected Gender: {gender}</h1>

            <br />

            {/* City Selection */}
            <h1>Select City</h1>

            {/* Dropdown for city selection */}
            <select 
                name="city" 
                id="city"  
                value={city} // To make the dropdown controlled
                onChange={handleCity}
            >
                <option value="gandhinagar">Gandhinagar</option>
                <option value="mansa">Mansa</option>
                <option value="dang">Dang</option>
                <option value="surat">Surat</option>
            </select>
            
            {/* Display selected city */}
            <h1>Selected City: {city}</h1>

        </div>
    );
}

export default SelectGenderCityDropdown;
