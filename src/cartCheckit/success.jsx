import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Button from "../component/buttton";
function Success(){

    const data=useMemo(()=>{
        localStorage.removeItem("cartDatas")
    },[])
    return(
        <>

      <div className="succuss_dev">
      <div className="checkmark__container">
        <i className="checkmark">✓</i>
      </div>
      <div className="success_text_block">
      <h1>Success</h1> 
        <p>We received your purchase request, we will be in delivered shortly!</p>
      </div>
    
      </div>
        </>
    )
}

export default Success;
