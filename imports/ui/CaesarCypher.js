import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
    constructor(props){
      super(props);
      this.state= {
        clearText: string,
        offsetNum: number,
        shiftLeft: boolean,
      };
    }

const NumberMinimum = 48;
const NumberMax= 9;
const LetterMin= 65;
const LetterMax= 90;
57 - 48 + 1 = 10
90 - 65 + 1 = 26
0 = 48, 9 =57, A = 65, Z = 90
// App coponent - represents the whole App

  encrpyt (text, numShift, shiftLeft ){
      encryptedText = "";
      text = text.toUpperCase

      }

  for every character C;
    if C > = minNUm && , c < = maxNUM ()
    if (!shifleft) {

    }



CaesarCypher.propTypes ={
  clearText: PropTypes.string.isRequired;
  shiftLeft: PropTypes.bool;
  offsetNum: PropTypes.integer;
  }

CaesarCypher.defaultProps={
  offsetNum: 2,
  shiftLeft: true,
  clearText: '',
