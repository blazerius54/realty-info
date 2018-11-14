import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

export const ModalWindow = styled.div`
  position: fixed;
  background: white;
  z-index: 2;
  padding: 20px 35px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 355px;
  header {
    margin-bottom: 18px;
    position: relative;

    h3 {
      margin: 0;
    }

    button {
      position: absolute;
      right: -56px;
      top: -15px;

      img {
        cursor: pointer;
      }

      &:focus {
        outline: none;
      }
    }
  }

  main {
    width: 100%;
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: gray;
  opacity: 0.5;
  z-index: 1;
`;

export const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  margin-bottom: 10px;

  p {
    margin: 0;

    &:last-child {
      text-transform: lowercase;
    }
  }
`;