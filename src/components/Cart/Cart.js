import React from 'react';
import AddedName from '../AddedName/AddedName';
import './Cart.css';
const Cart = (props) => {
    // console.log(props);

    //destructuring
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        //firstly product.quantity thake nah tai
        total = total + product.price;
        totalQuantity = totalQuantity + 1;
    }
    return (
        <div>
            <div className="cartstyle">
                <h2 className="text-style">Cart Summary</h2>
                <h5>Ordered Total: {totalQuantity}</h5>
                <h3>Total: {total.toFixed(2)} BDT</h3>
                <div className="addedDetail">
                    <h4 className="text-style">Ordered Product Info</h4>{
                        cart.map(cartSingle => <AddedName key={cartSingle.id}
                            product={cartSingle}
                        ></AddedName>)
                    }
                </div>


            </div>
        </div >
    );
};

export default Cart;