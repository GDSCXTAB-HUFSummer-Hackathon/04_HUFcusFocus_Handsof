import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: absolute;
  left: 0px;
  top: 60px;
  width: 77px;
  height: calc(100% - 60px);
  border-right: 1px solid #ededed;
`;

const NavbarItem = styled.div`
  width: 55px;
  height: 75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 0px 0px 20px;
`;

export const NavbarItem1 = styled(NavbarItem)`
  &:hover {
    background: #e8fbf1;
    border-right: 2px solid #10ab5a;
  }
`;

export const NavbarItem2 = styled(NavbarItem)`
  &:hover {
    background: #e4eeff;
    border-right: 2px solid #4285f4;
  }
`;

export const NavbarItem3 = styled(NavbarItem)`
  &:hover {
    background: #fff4db;
    border-right: 2px solid #f4bf4f;
  }
`;
