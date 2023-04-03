import prdt_1 from '../images/prdt_1.jpg';
import prdt_2 from '../images/prdt_2.jpg';
import prdt_3 from '../images/prdt_3.jpg';
import prdt_4 from '../images/prdt_4.jpg';
import prdt_5 from '../images/prdt_5.jpg';

import './CategoryDisp.css';

const CategoryDisp = () => {
    return (
        <div className="disp-cat">
            <h3>Shop by Category</h3>
            <div className="product-imgs">
                <img src={ prdt_1 } alt="" height="350px" width="232px" />
                <img src={ prdt_2 } alt="" height="350px" width="233px" />
                <img src={ prdt_3 } alt="" height="350px" width="233px" />
                <img src={ prdt_4 } alt="" height="350px" width="263px" />
                <img src={ prdt_5 } alt="" height="350px" width="233px" />
                <h4>See all</h4>
            </div>
            <h2>Transforming the way you Shop</h2>
        </div>
    );
}
 
export default CategoryDisp;