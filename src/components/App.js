import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {

  let [ theme, setTheme] = useState("App dark")



  let themeToggler = () => {
    // isDark === "App dark" ? setTheme("App dark") : setTheme("App light")
    if(theme === "App dark"){
      setTheme("App light")
    }else {
      setTheme("App dark")
    }
  }
  
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = setTheme ? "App dark" : "App light"

  return (
    <div className={theme}>
      <header>
        <h2>Shopster</h2>
        
         <button onClick={themeToggler}>{appClass ? "Dark" : "Light"}</button> 
      </header>
      <ShoppingList items={itemData} />
    </div>

    
  );
}

export default App;
