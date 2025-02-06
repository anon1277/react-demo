// Importing the ClassContent component to use inside CollegeContent
import ClassContent from "./ClassContent";

const CollegeContent = () => {

    return(
    <>
        {/* Styling the div with a background color and padding */}
        <div style={{background:'orange', padding:10}}> 
            {/* Horizontal line separator */}
            <hr />
            <h4>
                {/* Displaying the text and rendering the ClassContent component inside */}
                College Content
                <ClassContent />
            </h4>
        </div>
    </>
    ) 
}

// Exporting the CollegeContent component to be used in other parts of the app
export default CollegeContent;
