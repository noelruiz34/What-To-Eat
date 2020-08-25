import React, { Component } from 'react'
import styled from "styled-components";


export class AllFilters extends Component {
    render() {
        return (
            <FilterContainer>
            <a style={{ fontSize: "150%", marginRight: "1%" }}>Price:</a>
            <Input type="radio" name="search" id="p1" /> $
            <Input type="radio" name="search" id="p2" /> $ $
            <Input type="radio" name="search" id="p3" /> $ $ $
            <Input type="radio" name="search" id="p4" /> $ $ $ $
          </FilterContainer>
        )
    }
}
const Input = styled.input`
  margin-left: 7%;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin-left: 34%;
  font-weight: 300;
`;
export default AllFilters
