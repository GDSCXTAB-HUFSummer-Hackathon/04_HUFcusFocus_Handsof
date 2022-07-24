import styled from "styled-components";

export const TranslateContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 40px;
  margin-left: 165px;
  align-items: center;
`;

export const TranslationContainer = styled.div`
  border-radius: 10px;
  box-shadow: -1px 6px 14px 3px rgba(88, 88, 88, 0.1);
`;

export const ResultBox = styled.div`
  height: 377px;
  width: 419px;
`;

export const ResultText = styled.div`
  font-weight: 600;
  font-size: 25px;
  color: rgba(101, 103, 109, 0.15);
  line-height: 35px;
  max-width: 350px;
  margin-left: 35px;
  padding-top: 35px;
`;

export const SubBoxContainer = styled.div`
  width: 419px;
  height: 57px;
  border-top: 1px solid #ededed;
  display: flex;
  flex-direction: row;
`;

export const SubBox = styled.div`
  width: 360px;
  display: flex;
  align-items: center;
  padding-left: 28px;
`;

export const RefreshBtn = styled.div`
  width: 59px;
  background: #4285f4;
  border-radius: 0px 0px 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
