import React from 'react';
import styled from '@emotion/styled';

const ToolbarLayout = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  justify-content: center;
  align-items: center;
  background-color: #3c378e;
`;

const ToolbarWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  display: flex;
  width: 20%;
  height: 100%;
  align-items: center;
  color: white;
`;

const NavItemWrapper = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  height: 100%;
  color: white;
  justify-content: space-around;
`;

const Toolbar = () => {
  return (
    <>
      <ToolbarLayout>
        <ToolbarWrapper>
          <LogoWrapper>Floxus</LogoWrapper>
          <NavItemWrapper>
            <p>Courses</p>
            <p>Become a mentor</p>
            <p>Log In</p>
            <p>Signup</p>
          </NavItemWrapper>
        </ToolbarWrapper>
      </ToolbarLayout>
    </>
  );
};

export default Toolbar;
