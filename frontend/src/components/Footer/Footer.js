import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  background-color: #111111;
`;

const FooterWrapper = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  padding-top: 2%;
  padding-bottom: 2%;
`;

const FooterUp = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const FooterUpLeft = styled.div`
  display: flex;
  flex-basis: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  background-color: #2b2b2b;
  align-items: center;

  input {
    display: flex;
    flex-basis: 70%;
    height: 80%;
    ${'' /* justify-content:center; */}
    align-items:center;
    margin-left: 5px;
    border: none;
    background-color: #2b2b2b;
    color: white;
    padding-left: 1rem;

    &::placeholder {
      color: white;
      opacity: 50%;
    }

    &:focus {
      outline: none;
    }
  }

  button {
    display: flex;
    flex-basis: 30%;
    height: 100%;
    justify-content: center;
    align-items: center;
    border: none;
    color: #2b2b2b;
    font-size: 17px;
    font-weight: 600;

    &:focus {
      outline: none;
    }
  }
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterUp>
            <FooterUpLeft>
              <InputContainer>
                <input type="text" placeholder="Email" />
                <button>Submit</button>
              </InputContainer>
            </FooterUpLeft>
          </FooterUp>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
