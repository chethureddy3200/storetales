import { Link } from 'react-router-dom';
import './Products.css';
import { useState, useEffect } from "react";
import sanityClient from "@sanity/client";
import Modal from 'react-modal';

const client = sanityClient({
  projectId: "90bvbhqt",
  dataset: "production",
  useCdn: true,
});

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const query = `*[_type == "product"] {
      id,
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

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="products">
      <h2 className="product-title">All products you need is right here</h2>
      <div className="all-cards">
        {products.map((product) => (
          <div key={product.id} onClick={() => handleProductClick(product)}>
            <Link to={`/products/${product.id}`}>
              <div className="card">
                <img src={product.imageUrl} alt={product.name} />
                <h3>{product.name}</h3>
                <strong>${product.price.toFixed(2)}</strong>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Modal isOpen={selectedProduct !== null}>
        {selectedProduct && (
          <div>
            <img src={selectedProduct.imageUrl} alt={selectedProduct.name} />
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.description}</p>
            <strong>${selectedProduct.price.toFixed(2)}</strong>
            <button onClick={() => setSelectedProduct(null)}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Products;

