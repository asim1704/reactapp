function app() {
    return [
        React.createElement(h1),
        React.createElement(h2),
        React.createElement(h3),
        React.createElement(h4),
        React.createElement(h5),
        React.createElement(h6),
        React.createElement(h7),
        React.createElement(h8),

    ];
}

function h1(){
    return React.createElement('h1', { class: "h1" }, "This is h1 element" )
}
function h2 (){
    return React.createElement("h2",{class : "h2"},'this is h2 element')
}

function h3 (){
    return React.createElement("h3",{class : "3"},'this is h2 element')
}

function h4 (){
    return React.createElement("h4",{class : "h4"},'this is h2 element')
}

function h5 (){
    return React.createElement("h5",{class : "h5"},'this is h2 element')
}

function h6 (){
    return React.createElement("h6",{class : "h6"},'this is h2 element')
}

function h7 (){
    return React.createElement("h7",{class : "h7"},'this is h7 element')
}

function h8 (){
    return React.createElement("h8",{class : "h8"},'this is h8 element')
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(app))