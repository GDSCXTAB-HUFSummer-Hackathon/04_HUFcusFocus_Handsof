import { mainImage } from "assets/img";
import { HomeTranslateBtnSVG } from "assets/svg";
import * as S from "components/main/MainContent.styled";
import { Link } from "react-router-dom";

const MainContent = () => {
  return (
    <S.MainContentContainer>
      <S.MainTextContainer>
        <S.MainText>모든 서비스를</S.MainText>
        <S.MainText style={{ marginTop: "18px" }}>수어로 간편하게</S.MainText>
        <S.MainSubText style={{ marginTop: "24px" }}>
          수어 텍스트 자동 변환 서비스 핸즈오프,
        </S.MainSubText>
        <S.MainSubText>데스크탑 앱으로 어디에나 편리하게</S.MainSubText>
        <S.MainSubText>사용해보세요.</S.MainSubText>
        <S.BtnContainer>
          <Link to="/translate">
            <HomeTranslateBtnSVG />
          </Link>
        </S.BtnContainer>
      </S.MainTextContainer>
      <S.MainImageContainer
        src={mainImage}
        alt="main_image"
      ></S.MainImageContainer>
    </S.MainContentContainer>
  );
};

export default MainContent;
