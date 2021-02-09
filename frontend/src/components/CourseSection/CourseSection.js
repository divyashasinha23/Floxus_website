import React from 'react';
import styled from '@emotion/styled';
import CourseCard from '../CourseBox/CourseBox';

const CourseHeadingWrapper = styled.div`
  display: flex;
  height: 10vh;
  width: 100%;
  background-color: #f9f9f9;
  justify-content: center;
  align-items: center;
`;

const CourseHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 10vh;
  width: 80%;
  background-color: #f9f9f9;
`;

const CourseHeading = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: #4c4a6e;
  margin-bottom: 0;
`;

const CourseWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  background-color: #f9f9f9;
  justify-content: center;
  align-items: center;
`;

const CourseBoxContainer = styled.div`
  display: flex;
  height: 100%;
  width: 70%;
  margin-top: 5%;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 10%;
`;

const CourseSection = () => {
  return (
    <>
      <CourseHeadingWrapper>
        <CourseHeadingContainer>
          <CourseHeading>Upcoming Courses</CourseHeading>
          <p style={{ marginTop: 0, color: '#827FA5', fontSize: '15px' }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy
          </p>
        </CourseHeadingContainer>
      </CourseHeadingWrapper>
      <CourseWrapper>
        <CourseBoxContainer>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </CourseBoxContainer>
      </CourseWrapper>
    </>
  );
};

export default CourseSection;
