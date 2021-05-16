import { Button, Select } from "antd";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";
import { addCartItem, removeCartItem, setRecipeDetail } from "../actions";
import { SmileIcon, TruckIcon, TagIcon, PackageIcon } from "../components/icons"

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
    <div className="cart-wrap">
      <h1 className="cart-title">購物車</h1>
      <div className="cart-hr"></div>
      {cartItems.length === 0 ? (
        <h2 className="cart-reminder-text">你目前沒有選購任何食材喔</h2>
      ) : (
        cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <Link to={`/cook/${item.id}`}>
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
      <div className="cart-hr"></div>

      <div className="cart-counting-wrap">
        <div className="cart-counting-select-wrap">
          <div className="cart-counting-select-coupon">
            <TagIcon /><div className="cart-counting-select-text">選擇優惠券</div>
          </div>
          <div className="cart-counting-select-messenger">
            <PackageIcon />
            <div className="cart-counting-select-messenger-wrap">
              <div>訂單留言（希望配送日期時段、詳細位址名稱）</div>
              <textarea style={{height:'64px'}}></textarea>
              <label><input className="cart-counting-select-phone-call" type="checkbox" />配送前是否需要電話通知</label>
            </div>

          </div>
        </div>

        <div className="cart-counting-price-wrap">
          <div className="cart-counting-price-top-wrap">
            <div className="cart-counting-price-pretext-wrap">
              <div className="cart-counting-price-pretext">
                小計
              </div>
              <div className="cart-counting-price-pretext">
                運送地區
              </div>
              <div className="cart-counting-price-pretext">
                運費
              </div>
              <div className="cart-counting-price-pretext">
                總計（含稅）
              </div>
            </div>

            <div className="cart-counting-price-text-wrap">
              <div className="cart-counting-price-text">
                ${getTotalPrice()}
              </div>
              <div className="cart-counting-price-text">
                <form>
                  <input type="text"/>
                </form>
              </div>
              <div className="cart-counting-price-text">
                ${getTotalPrice()}
              </div>
              <div className="cart-counting-price-text">
                ${getTotalPrice()}
              </div>
            </div>
          </div>
          <div className="cart-counting-price-bottom-wrap">
            <Button className="cart-modal-btn" type="primary">
              <span>結帳去！</span>
            </Button>            
          </div>
        </div>

      </div>

      <div className="tip-wrap">
        <div className="tip-info">
          <h1 className="tip-info-title"><SmileIcon></SmileIcon>咖雞煮貼心小叮嚀</h1>
          <ul>
            <li>※配送地址與時段請正確填寫，若發生送錯地址等情況，將向消費者酌收額外運費。</li>
            <li>※使用購物金或優惠代碼折抵產品金額後低於免運門檻，仍需支付宅配運費。</li>
            <li>※購買後食材最快將會於12小時內送達，如有特殊需求，請記得填寫留言讓配送人員得知您的時間。</li>
            <li>※生鮮蔬果肉品因季節及氣候因素，供貨量有時不穩，若該筆訂單商品遇缺貨，將自動刪除品項，並由客服專員Email或電話通知，造成您的不便，敬請見諒。</li>
          </ul>
        </div>
        <div className="tip-hr"></div>
        <div className="tip-delivery">
          <h1 className="tip-delivery-title">配送時段</h1>
          <p className="tip-delivery-text">本站商品都將由專人為您宅配到府，請配合專員配送時間，專員將會為您提供最快速的服務，切勿催趕辛苦ㄉ配貨人員。</p>
          <TruckIcon />
          <p className="tip-delivery-time-text">周一至周五：9:00-12:00、1:00-18:00<br/>
            週六日：10:00-16:00<br/><br/>
            （國定假日、春節配送時間延長1-2天）</p>
        </div>
      
      </div>



    </div>
  );
}
