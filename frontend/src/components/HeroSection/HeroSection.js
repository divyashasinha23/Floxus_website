import React from 'react';
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import * as FaIcons from 'react-icons/fa';

const HeroWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #3c378e;
  justify-content: center;
  align-items: center;
`;

const HeroContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 80%;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-basis: 60%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  flex-basis: 40%;
  height: 100vh;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 100%;
`;

const Heading = styled.p`
  font-size: 45px;
  color: white;
  font-weight: 400;
  letter-spacing: 1.5px;
  ${'' /* height: 200px; */}
  margin-bottom: 10px;
`;

const HighLight = styled.span`
  color: #ed841f;
  font-weight: 600;
`;

const Excerpt = styled.p`
  color: #cecce3;
  font-size: 14px;
  font-weight: 300;
  padding-right: 20%;
  line-height: 25px;
  letter-spacing: 0.5px;
`;

const ExploreButton = styled.button`
  display: flex;
  width: 200px;
  height: 45px;
  background: transparent linear-gradient(85deg, #ed841f 0%, #ff5400 100%) 0% 0%
    no-repeat padding-box;
  border: none;
  border-radius: 22.5px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
`;

const HeroSection = () => {
  return (
    <>
      <HeroWrapper>
        <HeroContainer>
          <LeftContainer>
            <ContentBox>
              <Heading>
                Solve Real-World Problems with{' '}
                <HighLight>Project Based Learning</HighLight>
              </Heading>
              <Excerpt>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam.
              </Excerpt>
              <ExploreButton>
                Explore
                <FaIcons.FaArrowRight style={{ marginLeft: '10px' }} />
              </ExploreButton>
            </ContentBox>
          </LeftContainer>
          <RightContainer></RightContainer>
        </HeroContainer>
      </HeroWrapper>
    </>
  );
};

export default HeroSection;
