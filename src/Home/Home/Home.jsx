import Banner from "../Banner/Banner";
import Constant from "../Constant/Constant";
import PromoBanner from "../PromoBanner/PromoBanner";
import StudentWork from "../StudentWork/StudentWork";







const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <StudentWork></StudentWork>
            <PromoBanner></PromoBanner>
            <Constant></Constant>
            
              
        </div>
    );
};

export default Home;