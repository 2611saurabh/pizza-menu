import React from "react";
import ReactDOM from "react-dom/client";

function App(){

    return <h1>Hello React</h1>;
        
}

function SS(){

    return <h2>Saurabh Kumar</h2>;
}

function Another(){
    const x = 'saurabh'
    return <h2>ssjdjd </h2>
}



//react v18 
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render (
    
    <React.StrictMode>
    <div>
        <App />
        <SS />
        <Another />
    </div>
    
    </React.StrictMode>

)


//react before v18

// React.render(<App />); // another chage in import function 
// //import ReactDOM from "react-dom";  we write like this