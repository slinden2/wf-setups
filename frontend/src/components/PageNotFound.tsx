import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/elements/Button";
import { Title } from "../styles/elements/Title";

const SPageNotFound = styled.div``;

const PageNotFound = () => {
  return (
    <SPageNotFound>
      <Title>404 - Page Not Found</Title>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </SPageNotFound>
  );
};

export default PageNotFound;
