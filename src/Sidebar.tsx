import styled from 'styled-components';
import React, { useState } from 'react';


export default function Sidebar() {

  const [menuItem, setMenuItem] = useState(1);

  const menuItems = [
    {
      id: 1,
     name: "Overview",
    },
    {
      id: 2,
     name: "Metrics",
    },
    {
      id: 3,
     name: "Projects",
    },
    {
      id: 4,
     name: "Alerts",
    },
    {
      id: 5,
      name: "Logout",
    },
  ];

  return (
    <StyledSidebar>
     <div className='side_header'>Project Name</div>
       {menuItems.map((item, index) => {
          return (
            <StyledMenuItems
             onClick = {() => setMenuItem(item.id)}
             active = {menuItem === item.id}
             logout = {item.id === 5}
             key = {item.id}
            >
              <div>{item.name}</div>
            </StyledMenuItems>
          );
       })
       }
    </StyledSidebar>
  )
};

const StyledSidebar = styled.div`
 color: black;
 background-color: #F7F5F2;
 font-size: 1.2rem;
 position: relative;
 justify-content: center;
 height:100vh;
 padding: 3rem;
 box-sizing: border-box;
 .side_header {
  font-weight: 700;
  text-shadow: 1px 1px 1px #757980;
 }

`;


const StyledMenuItems = styled.div<{ active: boolean; logout: boolean }>`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: ${props => props.active ? "black" : "#a29d9d"};
  margin-top: ${props => props.logout ? "18rem" : "3rem"};
`;