import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

   const [value, setValue] = useState<number>(0)

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])

    const incHandler = () => {
       setValue(value + 1)
        /*setToLocalStorageHandler()*/
    }

/*    const setToLocalStorageHandler = ()  => {
       localStorage.setItem('counterValue', JSON.stringify(value))*/
        /*localStorage.setItem('counterValue +1', JSON.stringify(value +1))*/

    /*}*/

    /*const getFromLocalHandler = () => {
       let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }

    const clearLocalStorageHandler = () => {
       localStorage.clear()
        setValue(0)
    }
    const removeItemFromLocalStorageHandler = () => {
           localStorage.removeItem('counterValue +1')

        }*/

  return (
    <div className="App">
     <h1>{value}</h1>
        <button onClick={incHandler}>inc</button>
        {/*<button onClick={setToLocalStorageHandler}>setToLocalStorageHandler</button>
        <button onClick={getFromLocalHandler}>getFromLocalHandler</button>
        <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
        <button onClick={removeItemFromLocalStorageHandler}>removeItemFromLocalStorage</button>*/}

    </div>
  );
}

export default App;
