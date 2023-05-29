import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
import "bulma/css/bulma.css";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                imageSrc={AlexaImage}
                description="Alexa was created by amazon and helps you buy things"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                imageSrc={CortanaImage}
                description="Cortana was created by Microsoft and is Alexas sister"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                imageSrc={SiriImage}
                description="Siri was created by Apple and is being phased out"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
