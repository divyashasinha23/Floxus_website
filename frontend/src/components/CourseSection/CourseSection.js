import React from 'react';
import styled from '@emotion/styled';

const CourseWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
  justify-content: center;
  align-items: center;
`;

const CourseBox = styled.div`
  display: flex;
  height: 270px;
  width: 380px;
  box-shadow: 0px 10px 99px #4c4a6e26;
  border: 1px solid #cecce3;
  border-radius: 0px 48px 48px 0px;
`;

const BoxLeft = styled.div`
  display: flex;
  flex-basis: 35%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const BoxRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 65%;
  height: 100%;
  justify-content: center;
  ${'' /* background-color: black; */}
`;
const ImageContainer = styled.div`
  display: flex;
  height: 80%;
  width: 110%;
  background: #3c378e;
  border-radius: 8px;
  margin-left: -30%;
`;
const BoxHeading = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #4c4a6e;
  margin-bottom: 0px;
`;

const CourseSection = () => {
  return (
    <>
      <CourseWrapper>
        <CourseBox>
          <BoxLeft>
            <ImageContainer></ImageContainer>
          </BoxLeft>
          <BoxRight>
            <BoxHeading>Cloud Computing</BoxHeading>
            <p style={{ color: '#827FA5', fontSize: '10px', fontWeight: 500 }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </p>
            <p
              style={{
                color: '#6522EA',
                fontSize: '9px',
                fontWeight: 600,
                marginTop: '20px',
                marginBottom: 0,
              }}
            >
              Microsoft Technical Associate
            </p>
            <p
              style={{
                color: '#827FA5',
                fontSize: '9px',
                fontWeight: 600,
                marginTop: 5,
              }}
            >
              45+ Hours of Lecture
            </p>
            <p
              style={{
                color: '#FF5400',
                fontSize: '10px',
                fontWeight: 700,
                marginTop: '25px',
                marginLeft: 'auto',
                marginRight: '30px',
              }}
            >
              View Course &rarr;
            </p>
          </BoxRight>
        </CourseBox>
      </CourseWrapper>
    </>
  );
};

export default CourseSection;
