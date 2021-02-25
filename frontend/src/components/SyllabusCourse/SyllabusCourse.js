import React from 'react';
import styled from '@emotion/styled';
import Syllbus_Accordion from '../Syllbus_Accordion/Syllbus_Accordion';

const SyllabusContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const SyllabusWrapper = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 5%;
  padding-bottom: 5%;

  @media (max-width: 496px) {
    width: 90%;
  }
`;

const SyllabusCourse = () => {
  return (
    <>
      <SyllabusContainer>
        <SyllabusWrapper>
          <Syllbus_Accordion />
        </SyllabusWrapper>
      </SyllabusContainer>
    </>
  );
};

export default SyllabusCourse;
