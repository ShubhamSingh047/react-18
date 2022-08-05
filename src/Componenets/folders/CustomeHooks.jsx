import { useState, useEffect } from "react";

const CustomeHooks = () => {
  const url = "https://course-api.com/javascript-store-products";

  const [loading, setLoading] = useState(true);
  const [products, setProduct] = useState([]);

  const getProduct = async () => {
    const res = await fetch(url);
    const product = await res.json();
    setProduct(product);
    setLoading(false);
  };

  console.log(products);

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h1>{loading ? "Loading..." : "Data"}</h1>
    </div>
  );
};

export default CustomeHooks;
