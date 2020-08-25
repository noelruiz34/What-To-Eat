import React, { Component } from 'react'
import styled from "styled-components";

export class Current extends Component {
    render() {
        return (
            <div style={{fontSize: "125%", marginTop: "4%", marginLeft: "-15%" }}>
            <a style={{ marginLeft: "20%" }}>
              Radius:
              <Select id="miles-input" defaultValue="2">
                <option value="2"> 2 Miles </option>
                <option value="3"> 3 Miles </option>
                <option value="5"> 5 Miles </option>
                <option value="10"> 10 Miles </option>
                <option value="50"> 50 Miles </option>
              </Select>
            </a>
          </div>
        )
    }
}
const Input = styled.input`
  margin-left: 4%;
`;
const Select = styled.select`
  width: 25%;
  height: 1.6em;
  margin-left: 4%;
  font-size: 1em
  line-height: 1.25em;
  text-align-last: center;
  padding: 0;
`;
export default Current
