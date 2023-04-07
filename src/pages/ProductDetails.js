import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import client from "./client";

import sanityClient from "@sanity/client"

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      const query = `*[_type == "product" && id == "${id}"][0].name {
        id,
        name,
        slug,
        description,
        price,
        "imageUrl": image.asset->url
      }`;
  
      client.fetch(query).then((data) => {
        setProduct(data?.[0]);
      });
    }, [id]);
  
    if (!product) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="product-details">
        <h2>{product?.name}</h2>
        <img src={product?.imageUrl} alt={product?.name} />
        <p>{product?.description}</p>
        <p><strong>${product?.price?.toFixed(2)}</strong></p>
      </div>
    );
  };
  
  

export default ProductDetails;
