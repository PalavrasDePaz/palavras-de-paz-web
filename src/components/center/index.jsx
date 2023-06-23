import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCenteredDiv = styled.div`
  max-width: 1416px;
  margin: 0 auto;
`;

function Center({ children }) {
  return <StyledCenteredDiv>{children}</StyledCenteredDiv>;
}

Center.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Center;
