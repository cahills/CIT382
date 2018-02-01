import React, { Component } from 'react';

// App coponent - represents the whole App
export default class App extends Component {
    constructor(props){
      super(props);
      this.state= {
        tracktext: "",
        secretkey: "",
      };
    }

    onTextEntered = (changeEvent) => {
      let text = changeEvent.target.value;
      this.setState({tracktext: text});
      console.log(this.state);
    }

    onSecretEntered = (changeKey) => {
      let key = changeKey.target.value;
      this.setState({secrectkey: key});
      console.log(this.state);
    }

  render(){
    return(
      <div className="container">
        <h1>Cypher</h1>
        <div>

          <input  className ="Text" type = "input" onChange={this.onTextEntered.bind(this)}/>

          <br/>
          <br/>

          <input type = "input" onChange={this.onSecretEntered.bind(this)}/>
          <h2>Caesar</h2>

          <h3> CipherText</h3>

           <input type = "input"/>


           <h2>Cypto AES</h2>
           <h3>Cypher Text:</h3>
           <h3>Plain Text:</h3>

        </div>


    </div>

    );
  }
}
