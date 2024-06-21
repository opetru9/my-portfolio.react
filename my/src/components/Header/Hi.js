import cv from "../../docs/cv.Olaru.pdf";

const Hi = () => {
  return (
    <div className="header__wrapper">
      <h1 className="header__title">
        <strong>
          Hi, my name is <em>Petru</em>
        </strong>{" "}
        <br /> <em>Frontend Developer</em>
      </h1>
      <div className="header__text">
        <p>with passion for learning and creating.</p>
      </div>
      <div className={"avatar sm"}></div>
      <ul className="social">
        <li className="social__item">
          <a href={cv} download={"cv.Olaru.pdf"} className="btn">
            Download CV
          </a>
        </li>
        <li className="social__item">
          <a href="tel:+37379069320">
            <i className="fa-solid fa-square-phone"></i>
          </a>
        </li>
        <li className="social__item">
          <a href="mailto:olarupetru991@gmail.com">
            <i className="fa-solid fa-square-envelope"></i>
          </a>
        </li>
        <li className="social__item">
          <a
            href="https://www.facebook.com/profile.php?id=100008771324979"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-square-facebook"></i>
          </a>
        </li>
        <li className="social__item">
          <a href="https://github.com/opetru9" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-square-github"></i>
          </a>
        </li>
        <li className="social__item">
          <a
            href="https://www.linkedin.com/in/olaru-petru-2129312ba/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Hi;
