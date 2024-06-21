
import './project.css'
import { NavLink } from 'react-router-dom';

const ProjectComponent = ( {title, img, id, gitHubLink, demoLink} ) => {
  let demoLinkp = demoLink
  return (
    <li className="project">
      <NavLink to={"/project/" + id}>
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </NavLink>
      <div className="project__links">
        <a
          href={demoLinkp}
          target="_blank"
          rel="noreferrer"
          className={demoLinkp ? "" : "none"}
        >
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a href={gitHubLink} target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </li>
  );
};

export default ProjectComponent;
