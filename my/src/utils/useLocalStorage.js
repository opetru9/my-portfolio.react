import { useState, useEffect } from "react";

// get the value if there is in the local storage , if not , use default value:
function getStorageValue( key, defaultValue){

    const saved = localStorage.getItem(key)
    const initial = JSON.parse(saved)

    return initial || defaultValue;
    
}

// personalized hook:
function useLocalStorage(key, defaultValue){

    // valoarea default a variabilei value = voaloare luata din local Storage daca este,
    // daca nu - va fi echivalenta cu defaultValue setata de noi. 
    const [value, setValue] = useState(()=>{
        return getStorageValue(key, defaultValue)
    })

    // cind se schimba theme mode datele noi vor fi salvate in local storage.
    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    },[key, value])

    return [value, setValue]

}

export default useLocalStorage











