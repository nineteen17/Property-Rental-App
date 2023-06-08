import "./Home.scss";
import { useNavigate } from "react-router-dom";
import homeImg from "../../../assets/tristan-dixon-H9ZJLVkkjzs-unsplash.jpg";


const Home = () => {
const navigate = useNavigate();

const handleRent = () => {
  navigate("/rent");
};
  return (
  <div className="Home-container" >
    <div className="Home">
      <div className="Home__background-image">
        <h1>Helping clients to achieve </h1>
        <h1>Harmony through our </h1>
        <h1>expertise and skills</h1>
      </div>
      <div className="Home__buttons-container">
        <div className="Home__buttons-container__button" onClick={handleRent} >View our listings for rent</div>
        <div className="Home__buttons-container__button">Our services</div>
      </div>
      <div className="Home__awards-video-container">
        <div className="Home__awards-video-container__awards">
            <img className="Home__awards-video-container__awards__award"  src="https://i.vimeocdn.com/video/1130700644-42ddee99f23cc93fa3ce5f9f194ddc973e9cab60a16c3287eb77a29e3766cca6-d_640" alt="Award 1"/>
            <img className="Home__awards-video-container__awards__award" src="https://www.apac-insider.com/wp-content/uploads/2021/12/2021-Business-Awards-Logo.png" alt="Award 2"/>
            <img className="Home__awards-video-container__awards__award" src="https://uploads-ssl.webflow.com/63d0c0eba09ce145300e7e3f/640159b5eb56cc7c903fefcf_webp.webp" alt="Award 3"/>
        </div>
        
        <div className="Home__awards-video-container__video">
        <iframe
            src="https://player.vimeo.com/video/833160499?h=dd34b3b2ec&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&portrait=0&byline=0"
            width="192"
            height="108"
            style={{ border: 0 }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        </div>
        <div className="Home__form-container">
          <div className="Home__form-container__image">
            <img src={homeImg} />
          </div>
          <div className="Home__form-container__form">
            <h2>Need help ?</h2>
            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Message" />
              <textarea placeholder="Message" />
              <button>Submit</button>
            </form>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Home;