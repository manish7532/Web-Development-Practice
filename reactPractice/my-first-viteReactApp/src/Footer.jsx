function Footer(){
    return (
        <footer className="d-flex justify-content-center w-100" style={{position:"fixed",top:'90vh'}}>
            <p>&copy; {new Date().getFullYear()} Manish Joshi</p>
        </footer>
    )
}

export default Footer