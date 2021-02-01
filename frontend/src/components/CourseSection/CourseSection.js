import React from 'react';
import styled from '@emotion/styled';
import CourseCard from '../CourseBox/CourseBox';

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
