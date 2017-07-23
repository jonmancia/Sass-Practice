import React from 'react';
import Navbar from './components/Navbar';
import 'bootstrap-css';


class App extends React.Component {
  constructor(props){
    super(props);
  
  const d = new Date();
  const year = () => d.getFullYear();

  }
  render(){
    return(
      <div>
        <Navbar />
          <div className="container-fluid">
            <div className="jumbotron">
              <div className="container">
                <h1 className="text-center">Welcome</h1>
                <div className="text-center"><p>{this.year}</p></div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default App;