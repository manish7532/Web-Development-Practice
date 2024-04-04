function Button() {
    let count = 1
    const handleclick = (e) => {
        if(e.target.style.backgroundColor == 'blue'){
            e.target.style.backgroundColor = 'black'
        }
        else{
            e.target.style.backgroundColor = 'blue'
        }
        
        console.log('button clicked ' + count + 'times')
        count++;
    }
    return (
        <>
            <button className="btn" onClick={(e) => handleclick(e)}>Click Me😀</button>
        </>
    )
}

export default Button