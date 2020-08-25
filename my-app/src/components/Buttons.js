import React, { Component } from "react";
import styled from "styled-components";
import AllFilters from "./AllFilters.js"
export class Buttons extends Component {
  state = {
    visible: false,
    type: null,
  };
  render() {
    return (
      <div>
        <Butt class="btn btn-primary btn-block">Search</Butt>
        <Butt2
          class="btn btn-primary btn-block"
          onClick={() => {
            this.setState({ visible: !this.state.visible, type: "filters" });
          }}>
          Add Filters
        </Butt2>
        <hr
          style={{
            width: "65%",
            marginTop: "1%",
            marginBottom: "1%",
            height: "1px",
            backgroundColor: "black",
          }}></hr>
        {this.state.visible && this.state.type === "filters" ? (
            <AllFilters/>
        ) : null}
      </div>
    );
  }
}

const Butt = styled.button`
  margin-top: 2%;
  margin-left: 29.4%;
  width: 20%;
`;
const Butt2 = styled.button`
  margin-top: 2%;
  margin-left: 2.8%;
  width: 20%;
`;
export default Buttons;
