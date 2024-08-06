import { useEffect, useRef } from "react";
import useLocalStorage from "../../utils/useLocalStorage"; 
import systemLightMode from "../../utils/systemLightMode";
import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";
import './btnDarkMode.css'


const BtnDarkMode = () => {

    let [darkMode, setDarkMode] = useLocalStorage('darkMode', systemLightMode());
    
  // create a reference we can use for find the element with whis ref as atribute
    const btnRef = useRef(null)
    
  // actualizam valoarea printr-o functie de actualizare folosind valoarea curenta- 
  // "currentValue" pe care ne-o ofera React
    const toggleDarkMode = () =>{
        setDarkMode((currentValue)=>{
            return currentValue === 'light' ? 'dark' : 'light';
        })
    }

    useEffect(()=>{
       if(darkMode === 'dark'){
            document.body.classList.add('dark');
            btnRef.current.classList.add('dark-mode-btn--active')

        }else{
            document.body.classList.remove("dark");
            btnRef.current.classList.remove("dark-mode-btn--active");
        }
    },[darkMode])

  // dupa ce s-a montat componentul evennt Listenerul incepe sa astepte schimbari in color scheme
    useEffect(() => {
    // se creeaza un obiecat MediaQuerryList cu preferinta mea de culoare (dark)
      window
        .matchMedia("(prefers-color-scheme: dark)")
    // la care se ataseaza un eventListener (MediaQueryListEvent)
        .addEventListener("change", (event) => {
    // event.matches e true daca color Scheme noastra e egala cu MediaQuerryList setat (dark)
          const newColorScheme = event.matches ? "dark" : "light";
          setDarkMode(newColorScheme);
        });
    }, [setDarkMode]);

    return ( 

         <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button>
        
     );
}
 
export default BtnDarkMode;