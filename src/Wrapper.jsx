
function Wrapper({children ,color="green"}) {
    return (

        <div style={{ color:color ,width:"400px" ,border:"1px solid red" ,margin:"10px" }}>
                {children}
            <hr />
        </div>
    )
}

export default Wrapper;