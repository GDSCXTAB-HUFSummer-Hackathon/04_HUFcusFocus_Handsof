import styled from "styled-components";

export const SettingModalContainer = styled.div`
  margin-left: 31px;
`;

export const SettingModalTitle = styled.div`
  font-weight: 600;
  font-size: 25px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #65676d;
  position: absolute;
  left: 31px;
  top: 22px;
`;

export const CancelBtn = styled.div`
  cursor: pointer;
  position: absolute;
  left: 88.84%;
  right: 6.15%;
  top: 4.29%;
  bottom: 91.22%;
`;

export const SettingModalText = styled.div`
  font-weight: 600;
  line-height: 19px;
  color: #65676d;
  margin-bottom: 15px;
`;

export const SettingModalBox = styled.div`
  width: 381px;
  height: 36px;
  background: rgba(240, 240, 240, 0.5);
  margin-bottom: 21px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SettingModalBoxText = styled.div`
  font-weight: 400;
  line-height: 19px;
  color: #65676d;
`;

export const ServieceBox = styled.div`
  width: 381px;
  height: 124px;
  background: #f0f0f0;
  margin-bottom: 21px;
`;

export const ServieceBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  padding-top: 20px;
`;

export const ServieceBoxItem = styled.img`
  width: ${(props: { [keys: string]: string }) => props.width};
  height: ${(props) => props.height};
  margin-bottom: ${(props) => props.bottom};
  margin-left: 32px;
  margin-right: 34px;
  cursor: pointer;
`;
