// Importing the StudentContent component to use inside ClassContent
import StudentContent from "./StudentContent";

const ClassContent = () => {

    return(
    <>
        {/* Styling the div with a background color and padding */}
        <div style={{background:'green', padding:10}}> 
            {/* Horizontal line separator */}
            <hr />
            <h4>
                {/* Displaying the text and rendering the StudentContent component inside */}
                Class Content
                <StudentContent />
            </h4>
        </div>
    </>
    )  
}

// Exporting the ClassContent component to be used in other parts of the app
export default ClassContent;
