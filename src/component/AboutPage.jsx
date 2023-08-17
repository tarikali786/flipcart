import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./button.css";
import Button from "./buttton";

function AboutInfo({ setCartData,cartData=[] }) {
  const id = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const isDataInLocalVarible = useMemo(()=>{
    const storeData = JSON.parse(localStorage.getItem('cartDatas'))
    const checkData = storeData?.some((item)=>item.id===data.id);
    return checkData;

  },[data.id,cartData])
  
  async function getAboutInfo() {
    const resp = await axios.get(`https://dummyjson.com/products/${id.id}`);
    if (resp) {
      console.log(resp.data);
      setData(resp.data);
      setLoading(false);
    }
  }

  useEffect(() => {
    getAboutInfo();
  }, [id]);

  
  const onClick = () => {
    // Save cartData to local storage
    const storedData = JSON.parse(localStorage.getItem("cartDatas"));
    const existingData = storedData ? storedData : [];
    const isData = existingData.some((item)=>item.id === data.id)
    if(isData){
      return;
    }
    const updatedData = [...existingData, data];
    setCartData(updatedData)
    localStorage.setItem("cartDatas", JSON.stringify(updatedData));
  };
  
  // const isDataExist = useMemo(()=> cartData.some((item)=>item.id===data.id),[cartData,data])

  // console.log("isDataExist",isDataExist);

  if (loading) return <p>loading...</p>;

  return (
    <>
  
      <div className="AboutContainer">
        <div className="navigate__container">
          <button
            className="navigate__button"
            onClick={() => {
              navigate(-1);
            }}
          >
            Go Back
          </button>

          <button
            className="navigate__button"
            onClick={() => {
              navigate(+1);
            }}
          >
            Next
          </button>
        </div>

        <div className="detailsView">
          <div className="image__container">
            <img src={data.thumbnail} alt="" />
          </div>

          <div className="details">
            <p>
              Model: <span>{data.title}</span>
            </p>
            <p>
              description: <span>{data.description}</span>
            </p>
            <p>
              Price: <span>{data.price}</span>
            </p>
            <p>
              discountPercentage: <span>{data.discountPercentage}</span>
            </p>
            <p>
              rating: <span>{data.rating}</span>
            </p>
            <p>
              stock: <span>{data.stock}</span>
            </p>
            <p>
              brand: <span>{data.brand}</span>
            </p>
            <p>
              category: <span>{data.category}</span>
            </p>

            <div>
              <Button isDisabled={isDataInLocalVarible} label="Add to cart" onClick={onClick} />
            </div>
          </div>
        </div>

        <div className="imageslist">
          {data.images.map((i) => {
            return (
              <div className="listDivs" key={i}>
                <img src={i} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AboutInfo;
