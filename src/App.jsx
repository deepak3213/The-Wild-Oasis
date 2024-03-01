import styled from "styled-components";

function App() {
  const H1 = styled.h1`
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 5rem;
    text-align: center;
  `;

  const Input = styled.input`
    padding: 1rem;
    outline: none;
    border: 1px solid black;
    font-size: 1rem;
    &:focus() {
      outline: 1px solid red;
    }
  `;
  return (
    <div>
      <H1>Hello world</H1>
      <Input type="text" placeholder="Enter your name.." />
    </div>
  );
}

export default App;
