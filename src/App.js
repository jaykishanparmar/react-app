import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import TodoList from "./TodoList";
import { GlobalProvider } from './GlobalContext';

//element 
//const title = (<h1>Title of the page!</h1>);
//const Heading = () => <h1 className="head">Hello...</h1>;
//https://codesandbox.io/p/sandbox/laughing-gould-w824ff?file=%2Fsrc%2FTodoList.jsx%3A14%2C51

const ShowList = () => {
    return (<div>
                <h1>List</h1>
                <div><TodoList/></div>
            </div>);
};

const Heading = () => {
    let str = "Hello, World! from Jay";
  const strNew = str.split(" ");
  //console.log(strNew);
  let demo = '';
  let count = strNew.length;
  for(i=count-1;i>=0;i--){
    demo += " "+strNew[i];
  }
    return (
    <div>
        <div>
            <span>Original: {str}</span><br/>
            <span>Output: {demo}</span>
        </div>
        <div>logo</div>
        <div>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    );
};

const Search = () => {
    const [text, setText] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
        setText(event.target[0].value);
    };
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="search" ></input>
                    <button type="submit">Search</button>
                </form>
                <div>
                    List : <h1>{text}</h1>
                </div>
            </div>
        </div>
    );
};

const ShowUniqueValue = () => {
    const [textStr, setStrText] = useState("");
    let inputStr = '';
    const handleStrSubmit = (event) => {
        event.preventDefault();
        console.log(event.target[0].value);
        inputStr = event.target[0].value;
        // Alternative function to maintain order of first occurrence

        const getUniqueCharactersOrdered = (str) => {
            return Array.from(new Set(str.split(''))).join('');
        };
        

      const uniqueCharacters = getUniqueCharactersOrdered(inputStr);
      setStrText(uniqueCharacters);
    };
    return (
        <div>
            <form onSubmit={handleStrSubmit}>
                <input type="text" name="getStr"></input>
                <button type="submit">Get Number</button>
            </form>

            <div>Output - {textStr}</div>
        </div>
    );
    

};

const UniqueCharacters = () => {
    const inputString = "AASSDDFFFFFF";
    
    // Function to get unique characters in order
    const getUniqueCharacters = (str) => {
      return [...new Set(str)].join('');
    };
  
    // Alternative function to maintain order of first occurrence
    const getUniqueCharactersOrdered = (str) => {
      return Array.from(new Set(str.split(''))).join('');
    };
  
    const uniqueCharacters = getUniqueCharactersOrdered(inputString);
  
    return (
      <div>
        <p>Original String: {inputString}</p>
        <p>Unique Characters: {uniqueCharacters}</p>
      </div>
    );
  };
const Container = () => {
    return (
        <div>
            <div className="cart-detail">
                <h1>title</h1>
                <div>img</div>
                <div>details</div>
            </div>
        </div>
    );
};


const App = () => (
    <div id="contener">
        {/* {title} */}
        {/* {Heading()} */}
        {/* <Heading/>
        <Search/> */}
        {/* <Container/> */}
        {/* <Heading></Heading> */}
{/*         
        <div><UniqueCharacters/></div>
        <div><ShowUniqueValue/></div>
         */}
         <GlobalProvider>
        <div><ShowList/></div>
        </GlobalProvider>
    </div>
);

const appRouter = createBrowserRouter([
    {
        path: "/"
    },
    {

    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//return root.render(heading);
return root.render(<App/>);