import React from 'react';
import '.style.css';

const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Boo"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h2", {}, "Doxie"),
  ]);
};

const App = () => {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
