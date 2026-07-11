
function MsgBox({username, textColor}) {
    console.log(username)
    return (
        <>
        <h2 style={{color:textColor}}>Hello {username}</h2>
        </>
    )
}

export default MsgBox;