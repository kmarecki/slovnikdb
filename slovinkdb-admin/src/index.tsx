import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Bootstrap Tutorial</h1>
        <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing
    responsive, mobile-first projects on the web.</p>
      </div>
      <p>This is some text.</p>
      <p>This is another text.</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));