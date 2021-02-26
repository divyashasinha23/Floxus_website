import React from 'react';
import styled from '@emotion/styled';
import Chips from '../Chips/Chips';

const CourseOverviewContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
  background-color: #f9f9f9;
  justify-content: center;
  align-items: center;
`;

const CourseOverviewWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 80%;
`;

const CourseOverviewLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 60%;
  height: 100%;
  ${'' /* background-color: black; */}
`;

const CourseOverviewDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-basis: 70%;
  background-color: white;

  .heading {
    font-size: 16px;
    font-weight: 500;
    color: #636363;
    margin-left: 17px;
  }

  ul {
    margin-left: 5px;
    font-size: 12px;
    color: #000000;
    margin-top: 0;
    font-weight: 500;
  }

  ul li {
    margin-top: 5px;
  }

  .chipContainer {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    margin-left: 10px;
  }
`;

const CourseOverviewRight = styled.div`
  display: flex;
  flex-basis: 40%;
  height: 100%;
  ${'' /* background-color: red; */}
`;

const CourseOverview = () => {
  return (
    <>
      <CourseOverviewContainer>
        <CourseOverviewWrapper>
          <CourseOverviewLeft>
            <CourseOverviewDetails>
              <p className="heading">WHAT YOU WILL LEARN</p>
              <ul>
                <li>Install Python and write your first program</li>
                <li>Describe the basics of the Python programming language</li>
                <li>
                  Use variables to store, retrieve and calculate information
                </li>
                <li>
                  Use variables to store, retrieve and calculate information
                </li>
              </ul>
              <p className="heading">SKILLS YOU WILL GAIN</p>
              <div className="chipContainer">
                <Chips title="Computer Programming" />
                <Chips title="Python Programming" />
                <Chips title="Python Syntax and Semantics" />
                <Chips title="Object Oriented Python" />
              </div>
            </CourseOverviewDetails>
          </CourseOverviewLeft>
          <CourseOverviewRight></CourseOverviewRight>
        </CourseOverviewWrapper>
      </CourseOverviewContainer>
    </>
  );
};

export default CourseOverview;
