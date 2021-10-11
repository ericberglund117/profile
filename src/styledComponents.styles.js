import styled from 'styled-components';

export const StyledButton = styled.div`
  font-family: 'Roboto', sans-serif;
  display: inline-flex;
  height: 40px;
  width: 150px;
  border: 2px solid #E0EAFA;
  margin: 10px;
  color: #CAF0F8;
  text-transform: uppercase;
  text-decoration: none;
  font-size: .8em;
  font-weight: 500;
  letter-spacing: 1.5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  .link {
    font-weight: 500;
    color: #E0EAFA;
    position: relative;
    transition: all .45s ease-Out;
    text-decoration: underline;
  }
  &:hover #translate {
    left: 0;
  }
  &:hover .link {
    color: #E0EAFA;
  }
  #translate {
    transform: rotate(50deg);
    width: 100%;
    height: 250%;
    left: -200px;
    top: -30px;
    background: #0096C7;
    position: absolute;
    transition: all .3s ease-Out;
  }
`