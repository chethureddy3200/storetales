import model_1 from '../images/model_1.jpg';
import model_2 from '../images/model_2_adj.jpg';
import model_3 from '../images/model_3.jpg';
import model_4 from '../images/model_4.jpg';
import model_5 from '../images/model_5.jpg';
import model_6 from '../images/model_6.jpg';
import model_7 from '../images/model_7.jpg';
import model_8 from '../images/model_8.jpg';
import model_9 from '../images/model_9.jpg';
import model_10 from '../images/model_10.jpg';

import './Displayimg.css';

const Displayimg = () => {
    return (
        <>
            <div className="images">
                <div className="img-col-1 first">
                    <img src={ model_1 } alt=""/> <br />
                    <img src={ model_2 } alt=""/>
                </div>
                <div className="img-col-2">
                    <img src={ model_3 } alt="" height="300px" width="200px"/> <br />
                    <img src={ model_4 } alt="" height="308px" width="200px"/>
                </div>
                <div className="img-col-3">
                    <img src={ model_5 } alt="" height="300px" width="200px"/> <br />
                </div>
                <div className="img-col-4">
                    <img src={ model_6 } alt="" height="300px" width="200px"/> <br />
                    <img src={ model_7 } alt="" height="308px" width="200px"/>
                </div>
                <div className="img-col-5 last">
                    <img src={ model_8 } alt="" height="308px" width="200px"/> <br />
                </div>
                {/* <div className="img-col-6 last">
                    <img src={ model_9 } alt="" height="300px" width="200px"/> <br />
                    <img src={ model_10 } alt="" height="308px" width="200px"/>
                </div> */}

                <div className="hero-txt">
                    Find Your Perfect Purchase, <span className="special-txt">Every Time.</span>
                </div>
            </div>
            <hr />
        </>
    );
}
 
export default Displayimg;