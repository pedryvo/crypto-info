import React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Navbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  vertical-align: center;
  background-color: #333;
  color: white;
  padding: 10px;
  z-index: 1;
  height: 5vh;

  button {
    margin-left: auto;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #ccc;
    }
  }
`;

const NavbarButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-left: auto;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #ccc;
    }
  }
`;

const Sidebar = styled.div<{ isCollapsed: boolean }>`
  margin-left: -10px;
  width: 200px;
  position: fixed;
  top: 60px; /* match the height of the Navbar */
  bottom: 50px; /* match the height of the Footer */
  overflow-y: auto; /* allow scrolling within the Sidebar */
  background-color: grey;
  padding: 10px;
  padding-top: 20px;

  @media (max-width: 768px) {
    display: ${(props) => (props.isCollapsed ? 'none' : 'block')};
    margin-top: 20px;
    width: 96vw;
    position: fixed;
    top: 5vh; /* match the height of the Navbar */
    bottom: 50px; /* match the height of the Footer */
    overflow-y: auto; /* allow scrolling within the Sidebar */
    z-index: 1;
  }
`;

const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: white;
  height: 50px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* ensure that the layout spans the full height of the viewport */
`;

const Content = styled.div`
  display: flex;
  flex-grow: 1; /* ensure that the MainContent component fills the remaining vertical space */
  margin-top: 60px; /* ensure that the content is below the Navbar */
  margin-bottom: 50px; /* ensure that the content is above the Footer */
`;

const MainContent = styled.div<{ isCollapsed: boolean }>`
  flex-grow: 1; /* ensure that the MainContent component fills the remaining horizontal space */

  @media (min-width: 768px) {
    margin-left: 250px;
  }
  
  @media (max-width: 768px) {
    margin-left: '0px';
  }
`;

const LinkButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #555;
  color: white;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <LayoutWrapper>
      <Navbar>
        <h1>Site Title</h1>
        <NavbarButton onClick={toggleSidebar}>
          <i className="fas fa-bars" />
        </NavbarButton>
      </Navbar>
      <Main>
        <Content>
          <Sidebar isCollapsed={isSidebarCollapsed}>
            <LinkButton>Link 1</LinkButton>
            <LinkButton>Link 2</LinkButton>
            <LinkButton>Link 3</LinkButton>
            <LinkButton>Link 4</LinkButton>
            <LinkButton>Link 5</LinkButton>
          </Sidebar>
          <MainContent isCollapsed={isSidebarCollapsed}>
            {children}
          </MainContent>
        </Content>
        <Footer />
      </Main>
      <Footer>
        &copy; {new Date().getFullYear()} Site Name
      </Footer>
    </LayoutWrapper>
  );
};

export default Layout;
