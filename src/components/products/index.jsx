import { useEffect, useState } from "react";
import ProductItem from "./components/product-item";
import "./style.css";

const initialState = true;

function ProductList({ name, bName, listofProducts }) {
  const [flag, setFlag] = useState(initialState);
  const [count, setCount] = useState(0);
  const [changeStyle, setChangeStyle] = useState(false);

  function handleToggleText() {
    setFlag(!flag);
  }

  function handleIncreaseCount() {
    setCount(count + 1);
  }
  
  useEffect(() => {
    setFlag(!flag);
    console.log("run only once");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (count === 10) setChangeStyle(true);
  }, [count]);

  return (
    <div>
      <h3 className="title">E-Commerce Project</h3>
      <button onClick={handleToggleText}>Toggle Text</button>

      {flag ? <h4>{name} and {bName}</h4> : <h4>Hello World</h4>}

      <div>
        <button
          style={{
            backgroundColor: changeStyle ? "black" : "white",
            color: changeStyle ? "white" : "black",
          }}
          onClick={handleIncreaseCount}
        >
          Increase Count
        </button>
        <p>Count is {count}</p>
      </div>

      <ul>
        {listofProducts.map((item, index) => (
          <ProductItem singleProductItem={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
