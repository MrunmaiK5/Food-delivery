import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const navigate= useNavigate();

  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);
  /*const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });*/

 /* const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };*?/

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    
    let response= await axios.post(url+"/api/order/place",orderData,{headers:{token}});
    if(response.data.success){
      const {session_url}=response.data;
      window.location.replace(session_url);
    }else{
      toast.error("Errors!")
    }
  };*/

  /*useEffect(()=>{
    if(!token){
      toast.error("Please Login first")
      navigate("/cart")
    }
    else if(getTotalCartAmount()===0){
      toast.error("Please Add Items to Cart");
      navigate("/cart")
    }
  },[token])*/
  const placeOrder = (event) => {
    event.preventDefault();
    console.log("Order placed!");
  };
  const DELIVERY_FEE = 2;
// Replace occurrences of 2 with DELIVERY_FEE

  return (
    <form className="place-order" onSubmit={placeOrder}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            required
            type="text"
            placeholder="First name"
          />
          <input
            required
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          required
          type="text"
          placeholder="Email Address"
        />
        <input
          required
          type="text"
          placeholder="Street"
        />
        <div className="multi-fields">
          <input
            required
            type="text"
            placeholder="City"
          />
          <input
            required
            type="text"
            placeholder="State"
          />
        </div>
        <div className="multi-fields">
          <input
            required
            type="text"
            placeholder="Zip Code"
          />
          <input
            required
            name="country"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          required
          name="phone"
          type="text"
          placeholder="Phone"
        />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotals</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${DELIVERY_FEE}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
