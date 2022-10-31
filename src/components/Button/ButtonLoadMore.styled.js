import styled from 'styled-components';

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;

  button {
    display: inline-block;

    min-width: 150px;
    padding: 10px;
    background-color: rgb(77, 95, 196);
    color: white;

    font-family: inherit;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    border: 0;
    border-radius: 5px;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: rgb(64, 84, 201);
    }

    /* &.is-hidden {
      display: none;
    } */
  }
`;
