import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  text-align: center;
  color: grey;
  margin-top: 100px;
`;

export default function Contact() {
  return (
    <div>
      <Container>
        <h1>This is our contact</h1>
      </Container>
    </div>
  );
}
