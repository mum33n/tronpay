import phone from "../assets/phone.png";
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

      <sponsors>
        <center>
          <h2>OUR FEATURED SPONSORS</h2>
        </center>

        <h3>fg</h3>
      </sponsors>
    </>
  );
};
export default Home;
