import  { useMemo } from "react";
import Button from './component/buttton'
import { Link } from "react-router-dom";

function CartData() {
  const cartData = useMemo(() => JSON.parse(localStorage.getItem("cartDatas")) || [], []);
  const totalItem = cartData.length;


  const totalAmount = useMemo(()=>{
    let sum=0
    for(let i=0;i<cartData.length;i++){
      sum=sum+cartData[i].price
    }
    return sum;
  },[cartData]);

  
  
  const totalPrice = useMemo(() => {
    let sum = 0;
    
    for (let i = 0; i < cartData.length; i++) {
      const item = cartData[i];
      const discountAmount = ((item.price * item.discountPercentage) / 100);
      const discountedPrice = (item.price - discountAmount);
      sum += discountedPrice;
    }

    return sum.toFixed(2);
  }, [cartData]);
  
  const totalDiscount = useMemo(() => {
    let sum = 0;
    
    for (let i = 0; i < cartData.length; i++) {
      const item = cartData[i];
      const discountAmount = ((item.price * item.discountPercentage) / 100);
      // const discountedPrice = Math.ceil(item.price - discountAmount);
      sum += discountAmount;
    }

    return sum.toFixed(2);
  }, [cartData]);

  if (cartData.length===0) {
    return (
      <>
      <section className="section_not_found_item">
        
      <div className="item_not_Container" >
      <p>No Any Item Shoping by you</p>
      
      
      </div>
      <div>
      <Link to={'/'}>
        <Button label="Back To Home" />
      </Link>
      </div>
      </section>

      </>
    )
  }

  return (
    <>
      <div className="Cart__item_price_display">
        <div className="cart__parent_container">
          {cartData.map((item) => (
            <div className="cart__container" key={item.id}>

              <div className="image__cart_conatiner">
                <img src={item.thumbnail} alt="" />
              </div>

                <div>
                <p>{item.title}</p>
                  
                </div>
                <div className="price__conatiner">
                  <h3>${item.price}</h3>
                  <span>Discount: {item.discountPercentage}%</span>
                </div>

                <div className="instock__container">
                  {item.stock !== 0 ? (
                    <h3 className="instock__container">Stock</h3>
                  ) : (
                    <h3 className="Outstock__container">Out of Stock</h3>
                  )}
                </div>
            </div>
          ))}
        </div>
        <section>
          
        <div className="price_dev_container">
          <div className="pric__header">
            <p>Price Details</p>
          </div>

          <div className="item__total__dev">
            <h3>Total Item </h3>
            <h3>{totalItem}</h3>
          </div>

          <div className="item__total__dev">
            <h3> Price </h3>
            <h3>{totalAmount}$</h3>
          </div>
          <div className="item__total__dev">
            <h3>Discount Price </h3>
            <h3 className="total__discount_dev">- {totalDiscount}$</h3>
          </div>
          <div className="item__total__dev">
            <h3>Delivery Charges </h3>
            <h3 className="total__discount_dev">Free</h3>
          </div>
          <div className="total_amount_container">
            <h3>Total Amount </h3>
            <h3 >{totalPrice}$</h3>
          </div>
          <div className="save_conatiner">
            <p>You will save {totalDiscount} on this order</p>
          </div>
        </div>

        <div  className="checkout__button_container">
          {/* <Link to={{ pathname: '/cartCheck' state= { price: totalPrice } }}>
        </Link> */}

        <Link to="/cart/cartCheck" state={{ price: totalPrice }}>
        <Button label="PLACE ORDER" />
          </Link>
        </div>
        </section>

      </div>
    </>
  );
}

export default CartData;
