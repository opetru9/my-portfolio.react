import { useState } from "react";
import projects from "../../helpers/projectsList";
import ProjectComponent from "../project/Project-component";
import './main.css'

const Header = () => {

  const mainProjects = projects.slice(0,3)
  let showedArr = mainProjects
  let [show, setShow] = useState(false);

  function btnHandler(){
    setShow(!show)
  }
  if(show){
    showedArr = projects
  }else{
    showedArr = mainProjects
  }


    return (
      <main className="section home">
        <div className="container">
          <div className="title-1">Projects</div>

          <ul className="projects">
            {showedArr.map((project) => (
              <ProjectComponent
                title={project.title}
                img={project.img}
                key={project.id}
                id={project.id}
                gitHubLink={project.gitHubLink}
                demoLink={project.demoLink}
              />
            ))}
          </ul>

          <button onClick={btnHandler} className={"btn-see-all-projects"}>
            {show ? (
              <>
                Show less <i className="fa-solid fa-arrow-up"></i>
              </>
            ) : (
              <>
                Show more <i className="fa-solid fa-arrow-down"></i>
              </>
            )}
          </button>
        </div>
      </main>
    );
}
 
export default Header;