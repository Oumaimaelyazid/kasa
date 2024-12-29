import BanniereComponent from "../components/Banniere";
import imgKalen from "../assets/kalen.png";
import Collapse from "../components/Collapse";

const About = () => {
  const image = imgKalen;

  return (
    <div className="about-container">
      <BanniereComponent image={image} />

      <div className="about-collapse">
        <Collapse
          title="Fiabilité"
          content="Les annonces postees sur kasa garantissent "
        />
        <Collapse
          title="Respect"
          content="Le respect est une valeur essentielle pour nous."
        />
        <Collapse
          title="Service"
          content="Nous assurons un service de qualité."
        />
        <Collapse
          title="Sécurité"
          content="La sécurité des utilisateurs est notre priorité."
        />
      </div>
    </div>
  );
};

export default About;
