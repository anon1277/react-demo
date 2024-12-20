 function callFun(){
    alert("function called");
}

function Todolist(){
    return(
        <div className="jsx-demo">
            <h1>----------------------------------------------------------------------</h1>
                    <h1>Anon1277 TODO</h1>
                    <img src="https://m.media-amazon.com/images/I/51Z+lRYE+zL._SY300_SX300_.jpg"/>
                    <ul>
                        <li>Invent new Traffic Lights</li>
                        <li>Rehearse a Moview scene</li>
                        <li>Improve the spectum Technology</li>
                    </ul>
                    <button onClick={callFun}>Click me</button>
            <h1>----------------------------------------------------------------------</h1>

        </div>
    )
}

export default Todolist