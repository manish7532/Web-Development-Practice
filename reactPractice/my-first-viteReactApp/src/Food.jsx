function Food(){
    const food1 = "Me"
    const food2 = "AgainMe"
    return(
        <ol style={{height:"1000px"}}>
            <h6>Food For u & ME</h6>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
            <li>You❤</li>
            <li>PavBhaji</li>
        </ol>
    )
}

export default Food