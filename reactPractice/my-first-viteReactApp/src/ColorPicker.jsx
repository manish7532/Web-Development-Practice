import { useState } from "react"


function ColorPicker() {

    const [color, setColor] = useState('#ffffff')

    const handleColorChange = (event) => {
        setColor(event.target.value)
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <h2 className="text-center">Color Picker</h2>
            <div className="d-flex justify-content-center align-items-center" style={{ width: '300px', height: '300px', backgroundColor: color, borderRadius: '25px' }}>
                <p>Selected Color: {color}</p>
            </div>
            <br />
            <label >Select Color:</label>
            <input style={{ border: 'none', borderRadius: '5px' }} type="color" value={color} onChange={handleColorChange} />
        </div>
    )
}

export default ColorPicker