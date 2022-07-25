import phone from "../assets/phone.png";
import git from "../assets/git.png";
import file from "../assets/file.png";
import tron from "../assets/tron.png";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <>
      <intro>
        <Typewriter
          onInit={(typewriter) => {
            typewriter

              .typeString(
                "Introducing Tronpay , facilitating <br/>The modern payment system </br> via contracts "
              )

              .pauseFor(100)
              .deleteAll()
              .typeString(
                "Click the connect button <br/> To Initiate Transaction"
              )
              .start();
          }}
        />
      </intro>

      <h1>
        DECENTRALISED <br />
        PAYMENT SYSTEM WITH <br />
        TRONPAY
      </h1>
      <aside>
        <img src={phone} width={"600px"}></img>
      </aside>

      <center>
        <h2>OUR FEATURED SPONSORS</h2>
      </center>

      <sponsors>
        <h3></h3>
        <img src={git}></img>
        <img src={file}></img>
        <img src={tron} alt="" width={"150px"}></img>
      </sponsors>
    </>
  );
};
export default Home;
