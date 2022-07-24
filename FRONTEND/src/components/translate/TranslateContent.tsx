import * as S from "components/translate/TranslateContent.styled";
import { Title, TitleLine } from "components/common/shared";
import { ArrowRightSVG, RefreshSVG, CopySVG } from "assets/svg";
import { TranslateCamera } from "components/translate";
import { useState } from "react";

const TranslateContent = () => {
  const [text, setText] = useState("");

  /* const labelMap = [
    "안녕하세요!",
    "감사해요 :)",
    "사랑해요 :>",
    "좋아요!!",
    "힘들 것 같아요 :(",
  ]; */

  return (
    <>
      <Title>
        번역하기<span style={{ color: "#4285F4" }}>.</span>
        <TitleLine />
      </Title>
      <S.TranslateContentContainer>
        <TranslateCamera text={text} setText={setText} />
        <ArrowRightSVG />
        <S.TranslationContainer>
          <S.ResultBox>
            <S.ResultText>
              {text ? (
                <span style={{ color: "black" }}>{text}</span>
              ) : (
                <span>
                  번역을 시작하기 전에 간단하게 안내해드릴게요.
                  <br /> 수어가 잘 인식되도록 정면을 바라봐주세요. 동시에 화면을
                  보면서 제대로 번역되고 있는지 확인해주세요.
                </span>
              )}
            </S.ResultText>
          </S.ResultBox>
          <S.SubBoxContainer>
            <S.SubBox>
              <CopySVG style={{ cursor: "pointer" }} />
            </S.SubBox>
            <S.RefreshBtn onClick={() => setText("")}>
              <RefreshSVG />
            </S.RefreshBtn>
          </S.SubBoxContainer>
        </S.TranslationContainer>
      </S.TranslateContentContainer>
    </>
  );
};

export default TranslateContent;
