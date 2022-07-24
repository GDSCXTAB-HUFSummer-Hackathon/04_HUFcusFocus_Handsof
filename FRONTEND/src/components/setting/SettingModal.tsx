import { AccountSVG, CancelSVG, VideoSVG, DownSVG } from "assets/svg";
import { Background, Window, Popup } from "components/setting/Modal";
import * as S from "components/setting/SettingModal.styled";
import { google, jandi, kakao, discord, gmail, slack, add } from "assets/img";

const SettingModal = (props) => {
  return (
    <Background>
      <Window>
        <Popup>
          <S.SettingModalContainer>
            <S.SettingModalTitle>
              설정<span style={{ color: "#E56F8C" }}>.</span>
            </S.SettingModalTitle>
            <S.CancelBtn onClick={() => props.setModal(false)}>
              <CancelSVG />
            </S.CancelBtn>
            <S.SettingModalText style={{ marginTop: "85px" }}>
              서비스 연동
            </S.SettingModalText>
            <S.SettingModalBox style={{ marginBottom: "0px" }}>
              <DownSVG style={{ marginLeft: "13px" }} />
              <S.SettingModalBoxText style={{ marginLeft: "13px" }}>
                연동 가능한 서비스
              </S.SettingModalBoxText>
            </S.SettingModalBox>
            <S.ServieceBox>
              <S.ServieceBoxContainer>
                <a
                  href="https://slack.com/oauth/v2/authorize?client_id=3419835357618.3825983124806&scope=channels:read,groups:read,users:read,chat:write&user_scope=chat:write,groups:read,users:read,channels:read"
                  target="_blank"
                  rel="noreferrer"
                >
                  <S.ServieceBoxItem
                    src={slack}
                    alt="slack"
                    width={"26px"}
                    height={"26px"}
                  />
                </a>
                <S.ServieceBoxItem
                  src={google}
                  alt="google"
                  width={"31px"}
                  height={"31px"}
                />
                <S.ServieceBoxItem
                  src={jandi}
                  alt="jandi"
                  width={"28px"}
                  height={"28px"}
                />
                <S.ServieceBoxItem
                  src={kakao}
                  alt="kakao"
                  width={"28px"}
                  height={"28px"}
                />
              </S.ServieceBoxContainer>
              <S.ServieceBoxContainer>
                <S.ServieceBoxItem
                  src={discord}
                  alt="discord"
                  width={"31px"}
                  height={"31px"}
                />
                <S.ServieceBoxItem
                  src={gmail}
                  alt="gmail"
                  width={"28px"}
                  height={"23px"}
                />
                <S.ServieceBoxItem
                  src={add}
                  alt="add"
                  width={"25px"}
                  height={"25px"}
                />
              </S.ServieceBoxContainer>
            </S.ServieceBox>
            <S.SettingModalText>비디오</S.SettingModalText>
            <S.SettingModalBox>
              <VideoSVG style={{ marginLeft: "13px" }} />
              <S.SettingModalBoxText style={{ marginLeft: "13px" }}>
                카메라
              </S.SettingModalBoxText>
              <S.SettingModalBoxText style={{ marginLeft: "82px" }}>
                USB 2.0 HD UVC WebCam
              </S.SettingModalBoxText>
            </S.SettingModalBox>
            <S.SettingModalText>계정</S.SettingModalText>
            <S.SettingModalBox>
              <AccountSVG style={{ marginLeft: "13px" }} />
              <S.SettingModalBoxText style={{ marginLeft: "13px" }}>
                이메일
              </S.SettingModalBoxText>
              <S.SettingModalBoxText style={{ marginLeft: "82px" }}>
                handsof01234@gmail.com
              </S.SettingModalBoxText>
            </S.SettingModalBox>
          </S.SettingModalContainer>
        </Popup>
      </Window>
    </Background>
  );
};

export default SettingModal;
