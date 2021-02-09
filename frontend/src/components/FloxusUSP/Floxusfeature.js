import React from 'react';
import styled from '@emotion/styled';

const FloxusFeatureLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const FloxusFeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 80vh;
`;

const FloxusFeatureDescription = styled.div`
  display: flex;
  width: 100%;
  flex-basis: 50%;
`;

const FloxusFeatureDescriptionLeft = styled.div`
  display: flex;
  flex-basis: 50%;
  justify-content: center;
  align-items: center;
  ${'' /* background-color: black; */}
`;

const FloxusFeatureDescriptionRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  justify-content: center;
  align-items: center;
  ${'' /* background-color: black; */}
`;

const Heading = styled.p`
  font-size: 50px;
  color: #4c4a6e;
  font-weight: 600;
  padding-left: 20%;
  letter-spacing: 1px;
  ${'' /* padding-right: 16%; */}
`;

const FloxusFeatureContainer = styled.div`
  display: flex;
  width: 100%;
  flex-basis: 50%;
  justify-content: space-around;
`;

const FloxusFeatureCard = styled.div`
  display: flex;
  width: 300px;
  height: 200px;
  border: 1.5px solid #cecce3;
  border-radius: 10px;
  box-shadow: 0px 10px 99px #4c4a6e26;
`;

const Floxusfeature = () => {
  return (
    <>
      <FloxusFeatureLayout>
        <FloxusFeatureWrapper>
          <FloxusFeatureDescription>
            <FloxusFeatureDescriptionLeft>
              <Heading>
                How Floxus can boost your{' '}
                <span style={{ color: '#FF5400' }}>Career?</span>
              </Heading>
            </FloxusFeatureDescriptionLeft>
            <FloxusFeatureDescriptionRight>
              <p
                style={{
                  color: '#827FA5',
                  paddingRight: '15%',
                  paddingLeft: '20%',
                  fontSize: '15px',
                }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr.
              </p>

              <p
                style={{
                  color: '#827FA5',
                  paddingRight: '15%',
                  paddingLeft: '20%',
                  fontSize: '15px',
                }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr.
              </p>
            </FloxusFeatureDescriptionRight>
          </FloxusFeatureDescription>
          <FloxusFeatureContainer>
            <FloxusFeatureCard></FloxusFeatureCard>
            <FloxusFeatureCard></FloxusFeatureCard>
            <FloxusFeatureCard></FloxusFeatureCard>
          </FloxusFeatureContainer>
        </FloxusFeatureWrapper>
      </FloxusFeatureLayout>
    </>
  );
};

export default Floxusfeature;
