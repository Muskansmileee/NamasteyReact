import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm an h1 tag"),
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I'm an h1 tag"),
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ]),
// ]);

// console.log(parent); // object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
//React.createElement => object -when we render this object on dom , then it becomes a html element.
//ReactDom takes this object and converts it into html element and pushes that into our browser.
//it will replace everything (i am muskan ) that is inside root with what we provide in render(..);

const heading = React.createElement(
    "h1", 
    { id: "heading" }, 
    "Namastey react"
);

const jsxHeading = <h1>Namastey react using JSX</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); 