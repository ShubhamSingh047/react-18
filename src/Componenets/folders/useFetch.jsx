import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    const res = await fetch(url);
    const products = await res.json();
    setProducts(products);
    setLoading(true);
  };

  useEffect(() => {
    getProduct();
  }, [url]);
  return{loading, products}
};

export default useFetch;
