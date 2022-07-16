import "./HomePage.css";
import crypto from "../assets/crypto.png";
const HomePage = () => {
  return (
    <>
      <div id="com">
        <h1 id="hn">WHAT ARE WE DOING? </h1>
        <br />
        <h1 id="xx">
          Democratizing payment for the <br />
          blockchain space
        </h1>
      </div>
      <div className="aside">
        <img src={crypto} alt="crypto-image" width="40%" height="50%" />
      </div>

      <content>
        <h6>
          Tron pay is a crypto platform connecting users <br />
          trading with tron to enlist on the platform.
          <br /> Users can download the tronpay wallet or <br />
          connect via the website
        </h6>
      </content>
      <div class="subscribe">
        <p class="email">Email</p>
        <div class="call-action">
          <p>Join waiting list</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
