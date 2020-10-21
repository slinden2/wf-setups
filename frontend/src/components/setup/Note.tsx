import React from "react";
import styled from "styled-components";
import createDOMPurify from "dompurify";
import { Setup } from "../../generated/apolloComponents";

const Container = styled.div`
  margin: 2rem auto;
  width: 100%;
`;

const NoteTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.colors.silver};
  padding: 1rem;
  text-align: left;
  border-radius: ${(props) => props.theme.borderRadius}
    ${(props) => props.theme.borderRadius} 0 0;
  border-left: 1px solid ${(props) => props.theme.colors.lightGrey2};
  border-right: 1px solid ${(props) => props.theme.colors.lightGrey2};
  border-top: 1px solid ${(props) => props.theme.colors.lightGrey2};
`;

const NoteText = styled.div`
  font-size: 1.4rem;
  width: 100%;
  max-width: 500px;
  padding: 8px;
  background-color: ${(props) => props.theme.colors.lightGrey};
  border-radius: 0 0 ${(props) => props.theme.borderRadius}
    ${(props) => props.theme.borderRadius};
  border-left: 1px solid ${(props) => props.theme.colors.lightGrey2};
  border-right: 1px solid ${(props) => props.theme.colors.lightGrey2};
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGrey2};

  pre {
    padding: 8px;
    background-color: ${(props) => props.theme.colors.lightGrey2};
    border-radius: ${(props) => props.theme.borderRadius};
  }
`;

interface Props {
  setup: Setup;
  isEditing: boolean;
}

const Note: React.FC<Props> = ({ setup, isEditing }) => {
  const DOMPurify = createDOMPurify(window);
  return setup.note && !isEditing ? (
    <Container>
      <NoteTitle>Notes</NoteTitle>
      <NoteText
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(setup.note),
        }}
      />
    </Container>
  ) : null;
};

export default Note;
