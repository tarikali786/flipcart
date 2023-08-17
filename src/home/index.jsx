import "./index.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../component/buttton";
import { Link } from "react-router-dom";
function Home() {
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    const response = await axios.get("https://dummyjson.com/products");
    if (response) {
      setValues(response.data);
      setLoading(false);
    }
  }
  console.log(values);
  useEffect(() => {
    getData();
  }, []);

  // const gotoMoreInfo = () => {
  // };
  if (loading) return <p>loading...</p>;

  return (
    <>
      <div className="homeContainer">
        <div className="ListContainer">
          {values?.products?.map((item) => (
            <div className="listDiv" key={item.id}>
              <div className="imageDiv">
                <img src={item.thumbnail} alt="" />
              </div>
              <div className="imageInfo">
                <p>
                  <span>{item.title}</span>
                </p>
                <p>
                  <span>${item.price}</span>
                </p>
              </div>
              <div>
                <Link to={{ pathname: `/aboutProduct/${item.id}` }}>
                  <Button label="Buy" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;

export const Hello = () => {
  const [val, steVal] = useState("");
  async function getData() {
    const response = await axios.get("https://dummyjson.com/products");
    if (response) {
      steVal(response.data);
    }
  }

  async function postData() {
    try {
      const response = await axios.post("https://dummyjson.com/products", data);
      console.log(response.data);
      console.log("posted");
    } catch(error) {
      console.error(error);
    }
  }
  const dataToPost = { name: "Example Product", price: 10 };
  postData(dataToPost)
  useEffect(() => {
    getData();
  });
  return (
    <>
      <h1></h1>
    </>
  );
};
