import styled from "styled-components";
import { RiCelsiusFill, RiFahrenheitLine } from "react-icons/ri";
import {} from "react-icons/ri";
import { useState } from "react";
// import avatarImage from "./avatar.jpg";

const NavBarWrapper = styled.nav`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 10px 2px;
  background-color: #f0ecec;
  color: #242424;
`;

const LeftSection = styled.div`
  display: flex;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
  margin-right: 20px;
  cursor: pointer;
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  color: ${(props) => (props.active ? "#272626" : "#4e4c4c")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  border-bottom: ${(props) => (props.active ? "2px solid #272626" : "none")};
`;

const CircleIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#1b1a1a" : "transparent")};
  color: ${(props) => (props.active ? "#eae5e5" : "#2d2d2d")};
  margin-right: 20px;
  cursor: pointer;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
`;

// eslint-disable-next-line react/prop-types
const NavBar = ({ temp, setTemp }) => {
  const [active, setActive] = useState("Week");

  return (
    <NavBarWrapper>
      <LeftSection>
        <NavItem active={active === "Today"} onClick={() => setActive("Today")}>
          Today
        </NavItem>
        <NavItem active={active === "Week"} onClick={() => setActive("Week")}>
          Week
        </NavItem>
      </LeftSection>
      <RightSection>
        <CircleIcon active={temp === "C"} onClick={() => setTemp("C")}>
          <RiCelsiusFill />
        </CircleIcon>
        <CircleIcon active={temp === "F"} onClick={() => setTemp("F")}>
          <RiFahrenheitLine />
        </CircleIcon>
        <Avatar
          src={
            "https://ew.com/thmb/aEhG_aegrrHIv7qkQIe9_y5Dqk8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/avatar-netflix-012524-ab3f0b6c6176430c963eb64390b9e5c0.jpg"
          }
          alt="Avatar"
        />
      </RightSection>
    </NavBarWrapper>
  );
};

export default NavBar;
