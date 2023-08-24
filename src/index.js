import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';


const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  


function App(){

    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
        
}

function Header(){

  const style = {};
  return (
    <header className="header">
        <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  ); 
}

function Menu(){
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>



{/***********Conditonal redring short circuiting  */}
      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            Authenticate Italian Cusine. 6 creative dishes to choose from.All from our stone oven,
            all organic , all deleicous.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            

          ))}
          </ul>
        </React.Fragment>

      ) : (
        <p>We're still working on our menu. Please come back later:</p>
      )}

      {pizzas && <ul className="pizzas">
        {pizzas.map(pizza => (

          <Pizza pizzaObj={pizza} key={pizza.name} />

        ))}
      </ul>}


      

      

      {/* <Pizza 
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza 
        name="Pizza Funghi"
        ingredients="Tommato, mushrooms"
        price={12 }
        photoName="pizzas/funghi.jpg"
      /> */}
      
    </main>
  );

}

{/*pizzaObj in place of props called as destructuring */}

function Pizza({pizzaObj}) {

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>

        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>

          <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
        </div>
      
      

    </li>
      
  )
  
  
}

function Footer(){
    // return React.createElement("footer", null, "We're currently open!");
    const hour = new Date().getHours();
   // console.log(hour);
    const openHour =12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour
    console.log(openHour);

  // if(hour >= openHour && hour <= closeHour)
  // {
  //   alert("we'are currently open")
  // }
  // else{
  //   alert("Soory we are closed"); 
  // }


  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />

      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
      
    </footer>
  );


}

function Order(pizzaObj){
  return (

    <div className="order">
      <p>
        We're open until {pizzaObj.closeHour}:00. Come visit us or order
        online
      </p>
      <button className="btn">Order</button>
    </div>
  )
}



//react v18 
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render (
    
    <React.StrictMode>
    <App />
    </React.StrictMode>

)


//react before v18

// React.render(<App />); // another chage in import function 
// //import ReactDOM from "react-dom";  we write like this