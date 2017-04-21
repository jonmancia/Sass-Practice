import React from 'react';
import Navbar from './components/Navbar';
import 'bootstrap-css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { names: ['Jonathan', 'Lacie'], url: 'https://cdn.pixabay.com/photo/2017/04/02/14/46/philippines-2196004_960_720.jpg'}
  }

  render(){
    return(
      <div>
        <Navbar />
          <div className="container-fluid">
            <div className="jumbotron">
              <div className="container">
                <h1 className="text-center">Hi there {this.state.names[1]}!</h1>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default App;