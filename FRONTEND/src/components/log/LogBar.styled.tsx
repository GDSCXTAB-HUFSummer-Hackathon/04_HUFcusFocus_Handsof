import styled from "styled-components";

export const LogBarContainer = styled.div`
  position: absolute;
  left: 77px;
  top: 60px;
  width: 77px;
  height: calc(100% - 60px);
  border-right: 1px solid #ededed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogBarItem = styled.img`
  margin-top: 50px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
