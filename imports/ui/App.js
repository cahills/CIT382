import React, { Component } from 'react';

// App coponent - represents the whole App
export default class App extends Component {
    constructor(props){
      super(props);
      this.state= {
        tracktext: "",
        secretkey: "",
        value: "",
      };
    }

    onTextEntered = (changeEvent) => {
      let text = changeEvent.target.value;
      this.setState({tracktext: text});
      console.log(changeEvent.target.value);
    }

    onSecretEntered = (changeKey) => {
      let key = changeKey.target.value;
      this.setState({secrectkey: key});
      console.log(changeKey.target.value);
    }

    onValueEntered = (changeValue) => {
      let value = changeValue.target.value;
      this.setState({
        value: value
      });
      console.log(changeValue.target.value);
    }



  render(){
    return(
      <div className="container">
        <h1>Cypher</h1>
        <div>

          <input  className ="Text" type = "input" onChange={this.onTextEntered.bind(this)} placeholder="Input message please..."/>

          <br/>
          <br/>

          <input type = "input" onChange={this.onSecretEntered.bind(this)} placeholder="What is your key?"/>
          <h2>Caesar</h2>

          <h3> CipherText</h3>

          <input type = "input" value={this.state.value} onChange={this.onValueEntered.bind(this)} />
           <input type="range" min="0" max="9" className="slider" id="myRange" value={this.state.value}/>
          Shift Left:<input type="checkbox" name="shiftLeft" defaultValue="Left" />


           <h2>Cypto AES</h2>
           <h3>Cypher Text:</h3>
           <h3>Plain Text:</h3>

        </div>


    </div>

    );
  }
}
