import { useState } from "react"

function MyOnChangeComponent() {

    const [name, setName] = useState('Guest')
    const updateName = (e) => {
        setName(e.target.value)
    }

    const [quantity, setQuantity] = useState(1)
    const updateQuantity = (e) => {
        setQuantity(e.target.value)
    }

    const [payment, setPayment] = useState("Visa")
    const updatePayment = (e) => {
        setPayment(e.target.value)
    }

    const [shipping, setShipping] = useState('Pick Up')
    const updateShipping = (e) => {
        setShipping(e.target.value)
    }

    return (
        <div className="m-5">
            <input type="text" value={name} onChange={(e) => updateName(e)} />
            <p>Name: <strong>{name}</strong></p>
            <br />

            <input type="number" min={1} value={quantity} onChange={(e) => updateQuantity(e)} />
            <p>Quantity: <strong>{quantity}</strong></p>
            <br />

            <select value={payment} onChange={(e) => updatePayment(e)}>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
            </select>
            <p>Payment Method: <strong>{payment}</strong></p>
            <br />

            <label>
                <input type="radio" name="shipping" value='Pick Up' checked={shipping === 'Pick Up'} onChange={(e) => updateShipping(e)} />
                &nbsp;pick Up</label> &nbsp;

            <label>
                <input type="radio" name="shipping" value='Delivery' checked={shipping === 'Delivery'} onChange={(e) => updateShipping(e)} />
                &nbsp;Delivery</label>
            <p className="mt-2">Shipping: <strong>{shipping}</strong></p>

        </div>
    )
}
export default MyOnChangeComponent