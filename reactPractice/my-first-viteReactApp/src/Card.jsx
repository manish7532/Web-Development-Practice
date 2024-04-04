import profile from './assets/profilePhoto.jpeg'

function Card(){
    return (
        <div className="card m-3 text-center d-inline-block" style={{maxWidth:'250px'}}>
            <img src={profile} alt="ProfilePhoto" className=" card-image mt-3 mx-auto" height={'100vh'} width={'100vh'} style={{borderRadius:'50%'}} />
            <h2 className='card-title'>ManuCodes</h2>
            <p className='card-text'>I am noob coder</p>
        </div>
    )
}

export default Card