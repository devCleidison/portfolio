import { FaLinkedin, FaGithubSquare, FaWhatsappSquare } from "react-icons/fa";

import { Button } from "../../components/Button";
import Avatar from "../../assets/User.png";

import "./styles.scss";
import { TextTyper } from "../../components/TextTyper";

export const Home = () => {
  const handleOpenSocialLinks = (social) => {
    if (social === "linkedin") {
      window.open("https://www.linkedin.com/in/cleidison-silva/", "_blank");
    } else if (social === "github") {
      window.open("https://github.com/devCleidison", "_blank");
    } else if (social === "whatsapp") {
      window.open(
        `https://wa.me/5585996989041?text=Olá, Cleidison! \nGostaria de conversar com você sobre uma oportunidade.`,
        "_blank"
      );
    }
  };

  return (
    <section id="home">
      <div className="content">
        <div className="col-a">
          <span className="greeting">Oi! 👋</span>

          <div className="title-container">
            <span className="title">
              <TextTyper
                text="Eu sou Cleidison Silva"
                time={200}
                duration={11000}
                loop="infinity"
              />
            </span>
            <span className="job">
              <TextTyper
                text="Front-end developer"
                time={200}
                duration={11000}
                loop="infinity"
                delay={5000}
              />
            </span>
          </div>

          <p className="description">
            Desde cedo passava horas na frente do computador na lan house perto
            de onde morava, mas em vez de ficar jogando como os outros, ficava
            pesquisando sobre tecnologia. Hoje sei que sou apaixonado por
            tecnologia, louco por programação e fascinado pelas possibilidades
            que a programação nos proporciona.
          </p>

          <div className="btn-socials">
            <Button
              className="btn bg-white social"
              onClick={() => handleOpenSocialLinks("linkedin")}
            >
              <FaLinkedin />
            </Button>

            <Button
              className="btn bg-emphasis social"
              onClick={() => handleOpenSocialLinks("github")}
            >
              <FaGithubSquare />
            </Button>

            <Button
              className="btn bg-white social"
              onClick={() => handleOpenSocialLinks("whatsapp")}
            >
              <FaWhatsappSquare />
            </Button>
          </div>
        </div>

        <div className="col-b">
          <img src={Avatar} alt="Foto de Cleidison Silva" />
        </div>
      </div>
    </section>
  );
};
