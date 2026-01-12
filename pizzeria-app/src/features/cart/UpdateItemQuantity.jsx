/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({pizzaId, currentQuantity}) {

    const dispath = useDispatch();

    return (
        <div className="flex gap-1 items-center md:gap-3">
            <Button type='round'
            onClick={() => dispath(decreaseItemQuantity(pizzaId))}>-</Button>
            <Button type='round'
            onClick={() => dispath(increaseItemQuantity(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity
