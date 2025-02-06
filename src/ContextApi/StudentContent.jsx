// Importing the SubjectContent component to use inside StudentContent
import SubjectContent from "./SubjectContent";

const StudentContent = () => {

    return(
    <>
        {/* Styling the div with a background color and padding */}
        <div style={{background:'skyblue', padding:10}}> 
            {/* Horizontal line separator */}
            <hr />
            <h4>
                {/* Displaying the text and rendering the SubjectContent component inside */}
                Student Content:
                <SubjectContent />
            </h4>
        </div>
    </>
    )  
}

// Exporting the StudentContent component to be used in other parts of the app
export default StudentContent;
