import React, { Component } from 'react'; 
import './App.css';

class App extends Component() {
  render() {
    return (
      <div className="App">
      <header>  
        <h1>Hello World</h1>
      </header>
      <main>
        <section>
          <h2>Candies</h2>
            <ul>
              <li>
                <div>
                  <p>Skittles: $1.00</p>
                </div>
              </li>
              <li>
                <div>
                  <p>Maltesers: $1.50</p>
                </div>
              </li>
            </ul>
        </section>
      </main>
    </div>
  );
}
}

export default App;
