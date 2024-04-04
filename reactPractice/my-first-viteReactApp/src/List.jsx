/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

function List(props) {
    // const fruits = [
    //     { id: 1, name: "Apple", calories: 95 },
    //     { id: 2, name: "Orange", calories: 85 },
    //     { id: 3, name: "Banana", calories: 120 },
    //     { id: 4, name: "Coconut", calories: 45 },
    //     { id: 5, name: "PineApple", calories: 138 }
    // ]

    // fruits.sort((a,b) =>a.name.localeCompare(b.name)); // alphabetical 
    // fruits.sort((a,b) =>b.name.localeCompare(a.name)); // reverse alphabetical 
    // fruits.sort((a, b) => a.calories - b.calories); // Numerical 
    // fruits.sort((a, b) => b.calories - a.calories); // reverse Numerical 


    const category = props.category;
    const itemList = props.items


    // eslint-disable-next-line react/prop-types
    const listItems = itemList.map((item) =>
        <li key={item.id}>
            {item.name}: &nbsp;
            <strong>{item.calories}</strong>
        </li>
    )

    return (
        <>
            <div className="row justify-content-center">
                <div className=" col-6">
                    <h3 className="text-center" style={{ backgroundColor: "#4287f5", borderRadius: "10px", padding: "5px" }}>{category}</h3>
                    <ol>{listItems}</ol>
                </div>
            </div>
        </>
    )
}

List.protoTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string, 
        calories: PropTypes.number
    }))
}

List.defaultProps = {
    category: 'category',
    items: []
}

export default List