import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

export const Options = styled.div`
  display: flex;
  margin-top: 50px;
  position: relative;

  input {
    border-bottom: 2px solid #42a7f4;
    margin-right: 10px;
    text-align: center;
    font-size: 150%;

    &:focus {
      outline: none;
    }
  }

  button {
    background: #f4e841;
    padding: 10px;
  }
`;

export const Error = styled.div`
  color: red;
  width: 100%;
  margin-top: 5px;
  position: absolute;
  top: 40px;
`;
