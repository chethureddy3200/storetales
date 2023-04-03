import prdt_1 from '../images/prdt_1.jpg';
import { Link } from 'react-router-dom';
import './Products.css';
import { useState, useEffect } from "react";
import sanityClient from "@sanity/client";

const client = sanityClient({
    projectId: "90bvbhqt",
    dataset: "production",
    useCdn: true,
  });

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const query = `*[_type == "product"] {
        name,
        slug,
        description,
        price,
        "imageUrl": image.asset->url
      }`;
  
      client.fetch(query).then((data) => {
        setProducts(data);
      });
    }, []);

    return (
        <div className="products">
          <h2 className="product-title">All products you need is right here</h2>
          <div className="all-cards">
            {products.map((product) => (
              <Link to={`/products/${product.slug}`} key={product._id}>
                <div className="card">
                  <img src={product.imageUrl} alt={product.name} />
                  <h3>{product.name}</h3>
                  <strong>${product.price.toFixed(2)}</strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
            }
export default Products;