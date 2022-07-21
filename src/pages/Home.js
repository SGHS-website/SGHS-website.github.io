import schoolBackground from "../images/background.jpg"
import schoolLogo from "../images/logo.png"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


const Home = () => {
    return (
        <div className="wrap">
            <div className="section1">
                <img className = "background-image" src={schoolBackground}/>
                <div className="quote-box">
                    <img src={schoolLogo} className="school-logo"/>
                    <p className="quote">
                        Our Hearts in Korea
                        <br/>
                        Our Eyes to the World
                    </p>
                    <p className="sghs">Seoul Global High School</p>
                </div>
                <div class="button-down"></div>
            </div>
            <div className="section2">

            </div>
            <div className="section3">
                
            </div>
            <div className="section4">
                
            </div>
        </div>
    )
  };
  
  export default Home;

