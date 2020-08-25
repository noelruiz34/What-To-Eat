import React, { Component } from "react";
import styled from "styled-components";
import Zip from "./Zip"
import City from "./City"
import Current from "./Current"
import '../App.css';
import Buttons from './Buttons'

export class SearchBy extends Component {
    state = {
        visible: false,
        type: null,
    }
    componentDidMount() {
        var zip = document.getElementById("zip");
        zip.click();
    }
  render() {
    return (
        <div><LocationContainer>
        <a style={{ fontSize: "150%" }}>Search By: </a>
        <Input
          type="radio"
          name="search"
          id="zip" 
          onClick={() => {this.setState({visible: true, type: 'zip'})}}
        />
        Zip Code
        <Input
          type="radio"
          name="search"
          id="city"
          onClick={() => {this.setState({visible: true, type: 'city'})}}
        />
        City
        <Input
          type="radio"
          name="search"
          id="currentLocation"
          onClick={() => {this.setState({visible: true, type: 'current'})}}
        />
        Use Current Location
        {(this.state.visible && this.state.type === 'zip') ? <Zip /> : null}
        {(this.state.visible && this.state.type === 'city') ? <City /> : null}
        {(this.state.visible && this.state.type === 'current') ? <Current /> : null}
      </LocationContainer>
      <Buttons/>
      </div>
    );
  }
}

const Butt = styled.button`
    margin-top:  2%;
    margin-left: 29.4%;
    width: 20%;
`;
const Butt2 = styled.button`
    margin-top:  2%;
    margin-left: 2.8%;
    width: 20%;

`;
const Input = styled.input`
  margin-left: 4%;
  `;
const LocationContainer = styled.div`
  width: 50%;
  margin-left: 35%;
  font-weight: 300;
`;
export default SearchBy;
