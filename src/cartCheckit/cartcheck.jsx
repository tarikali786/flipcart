import "./cartCheck.css"
import Button from '../component/buttton'
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

function CartCheck() {
  const  {state}  = useLocation() ??{}


  return (
    <>
    
      <div className='shipping_item'>
        <div className="price_dev__container">
      <p>Total Price </p> <span>{state?.price}</span>
            
        </div>
        <div>

            <Link to="success">
            <Button label="Shipping"/>
            </Link>
        </div>
      </div>
    </>
  );
}

export default CartCheck;
