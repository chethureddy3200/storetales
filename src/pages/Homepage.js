import Navbar from "../components/Navbar";
import Displayimg from "../components/Displayimg";
import CategoryDisp from "../components/CategoryDisp";

const Homepage = () => {
    return (
        <div className="home">
            <Displayimg />
            <CategoryDisp />
        </div>
    );
}
 
export default Homepage;