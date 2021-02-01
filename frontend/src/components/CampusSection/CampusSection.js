import React from 'react';
import * as FaIcons from 'react-icons/fa';
import styled from '@emotion/styled';
// import './CampusSection.css';

const CampusWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #3c378e;
  justify-content: center;
  align-items: center;
`;

const CampusContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 80%;
  align-items: center;

  @media (max-width: 496px) {
    flex-direction: column;
  }
`;

const CampusData = styled.div`
  display: flex;
  flex-basis: 60%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const CampusContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 100%;

  @media (max-width: 496px) {
    height: 80%;
  }
`;

const Heading = styled.div`
  font-size: 3em;
  color: white;
  font-weight: 400;
  letter-spacing: 1.5px;
  margin-bottom: 10px;

  @media (max-width: 496px) {
    font-size: 2em;
    letter-spacing: 0;
  }
`;

const Description = styled.div`
  color: #cecce3;
  font-size: 14px;
  font-weight: 300;
  padding-right: 20%;
  line-height: 25px;
  letter-spacing: 0.5px;
`;

const CampusButton = styled.button`
  display: flex;
  width: 200px;
  height: 45px;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 22.5px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 496px) {
    height: 55px;
  }
`;

const CampusImage = styled.div`
  display: flex;
  flex-basis: 20%;
  height: 100vh;
`;

function CampusSection() {
  return (
    <>
      <CampusWrapper>
        <CampusContainer>
          <CampusData>
            <CampusContent>
              <Heading>
                Trusted across<br></br>
                <span style={{ color: ' #ed841f', fontWeight: 600 }}>
                  5+ College Campus
                </span>
                in india.
              </Heading>
              <Description>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy
              </Description>
              <CampusButton>
                Book Demo
                <FaIcons.FaArrowRight style={{ marginLeft: '10px' }} />
              </CampusButton>
            </CampusContent>
          </CampusData>
          <CampusImage></CampusImage>
        </CampusContainer>
      </CampusWrapper>
    </>
  );
}

export default CampusSection;
