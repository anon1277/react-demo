// Importing the 'useContext' hook from React to access context data
import { useContext } from "react";

// Importing the SubjectContentData context from the Contextdata file
import { SubjectContentData } from "./Contextdata";

const SubjectContent = () => {
    // Using the useContext hook to access the value from SubjectContentData context
    const subject  = useContext(SubjectContentData);
    
    return(
    <>
        {/* Styling the div with a background color and padding */}
        <div style={{background:'DodgerBlue', padding:10}}> 
            {/* Horizontal line separator */}
            <hr />
            <h4>
                {/* Displaying the subject value from context */}
                Subject is : {subject}
            </h4>
        </div>
    </>
    )
}

// Exporting the SubjectContent component to be used in other parts of the app
export default SubjectContent;
