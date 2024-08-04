import './btnDemo.css'

const BtnDemo = ( {link} ) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="btn-outline-demo"
    >
      <i className="fa-solid fa-arrow-up-right-from-square"></i>
      Demo version
    </a>
  );
};

export default BtnDemo;
