import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { names: ['Jonathan', 'Lacie']}
  }

  render(){
    return(
      <div>
        <p>Hi there</p>
      </div>
    )
  }
}

export default App;