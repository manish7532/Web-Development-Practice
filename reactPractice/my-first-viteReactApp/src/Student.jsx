function Student(s) {
    return (
        <div className="card m-4 w-25 text-center d-inline-block">
            <p>Name: {s.name}</p>
            <p>Age: {s.age}</p>
            <p>Student: {s.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

export default Student