const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },

        [React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h4", {}, "I'm h4 tag")])
);




const heading = React.createElement("h1", { //React me aese element create krte hn aur react 1st file bnati ye
    id: "heading",
    className: "heading"
}, "Hello from react core File");



const root = ReactDOM.createRoot(document.getElementById("root")); //ReactDOM ki zimmedari ye hai yhi pe sb kchj render hoga     
root.render(parent);