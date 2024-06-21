import './rating.css'

const Rating = () => {

   const ratingData = [
     { title: "1+", subtitle: "Years of Practical Training Experience" },
     { title: 'Frontend', subtitle: "JavaScript, React, SCSS, BootStrap, MaterialUI, Figma" },
     { title: 'Backend', subtitle: "NodeJS, Docker, PostgreSQL" },
    //  { title: 'Languages', subtitle: "English, Italian, Russian , Romanian" },
   ];

  return (
    <div className={"rating__wrapper container"}>

        {ratingData.map(data => {
            return (
              <div className={"rating__item"} key={data.title}>
                <div className={"item__title"}>{data.title}</div>
                <div className={"item__subtitle"}>{data.subtitle}</div>
              </div>
        );})}
      
    </div>
  );
};

export default Rating;
