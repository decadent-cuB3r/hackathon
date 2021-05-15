import { Button, Select } from "antd";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";
import { addCartItem, removeCartItem, setRecipeDetail } from "../actions";
const { Option } = Select;

export default function CartContent() {
  const {
    state: { cartItems },
    dispatch,
  } = useContext(StoreContext);
  const getTotalPrice = () => {
    return cartItems.length > 0
      ? cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
      : 0;
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div>
      {cartItems.length === 0 ? (
        <div>你目前沒有選購任何食譜喔</div>
      ) : (
        cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <Link to={`/detail/${item.id}`}>
              <div
                className="cart-image"
                onClick={() => {
                  setRecipeDetail(dispatch, item.id, item.qty);
                }}
              >
                <img src={item.image} alt={item.name} />
              </div>
            </Link>
            <div className="cart-item-content">
              <div className="cart-name">{item.name}</div>
              <div className="recipe-qty">
                Qty: {"   "}
                <Select
                  defaultValue={item.qty}
                  value={item.qty}
                  className="select-style"
                  onChange={(qty) => addCartItem(dispatch, item, qty)}
                >
                  {[...Array(item.countInStock).keys()].map((x) => (
                    <Option key={x + 1} value={x + 1}>
                      {x + 1}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
            <div className="cart-item-end">
              <div className="cart-price">${item.price * item.qty}</div>
              <div
                className="cart-item-delete"
                onClick={() => removeCartItem(dispatch, item.id)}
              >
                x
              </div>
            </div>
          </li>
        ))
      )}
      <div className="cart-total-price-wrap">
        Total
        <div className="cart-total-price">${getTotalPrice()}</div>
      </div>
      {/* <Button className="cart-modal-btn" type="primary">
        <CartIcon size={20} />
        <span style={{ marginLeft: 12 }}>Start Checkout</span>
      </Button> */}
    </div>
  );
}
