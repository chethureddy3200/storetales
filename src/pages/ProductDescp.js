import prdt_1 from '../images/prdt_1.jpg';
import './ProductDescp.css';

const ProdcutDescp = () => {
    return (
        <div className="product-desc">
            <img src={ prdt_1 } alt="" />
            <div className="details">
                <h2>Product #1</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minima dicta voluptates maxime perferendis amet iure atque explicabo, nulla illum, eveniet quisquam voluptate. Harum, tempore.</p>
                <div className='price'>Rs. 99</div>
                <button className='btn'>Buy now</button>
            </div>
        </div>
    );
}
 
export default ProdcutDescp;