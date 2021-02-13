import React from 'react';
import styled from '@emotion/styled';

const CourseHeroLayout = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
  background-color: #3c378e;
  justify-content: center;
  align-items: center;
`;

const CourseHeroWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 70vh;
`;

const CourseHeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  height: 100%;
  justify-content: center;

  .heading {
    font-size: 35px;
    font-weight: 500;
    color: white;
    letter-spacing: 1px;
    margin-bottom: 0;
  }

  .description {
    font-size: 15px;
    font-weight: 300;
    color: white;
    margin-top: 0;
  }

  li {
    color: white;
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 5px;
    letter-spacing: 0.5px;
  }
`;

const CourseHeroRight = styled.div`
  display: flex;
  flex-basis: 50%;
  height: 100%;
`;

const Coursehero = () => {
  return (
    <>
      <CourseHeroLayout>
        <CourseHeroWrapper>
          <CourseHeroLeft>
            <p className="heading">Python: Novice to Expert</p>
            <p className="description">
              Get hands-on Python skills and start your coding career
            </p>

            <li>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy
            </li>
            <li>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy
            </li>
            <li>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy
            </li>
          </CourseHeroLeft>
          <CourseHeroRight></CourseHeroRight>
        </CourseHeroWrapper>
      </CourseHeroLayout>
    </>
  );
};

export default Coursehero;
