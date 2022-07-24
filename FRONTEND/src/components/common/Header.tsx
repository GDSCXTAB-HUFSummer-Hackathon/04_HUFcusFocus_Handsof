import * as S from "components/common/Header.styled";
import { LogoSVG, SettingSVG } from "assets/svg";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <Link to="/">
          <LogoSVG />
        </Link>
      </S.LogoContainer>
      <S.SettingButtonContainer onClick={() => props.setModal(true)}>
        <SettingSVG />
      </S.SettingButtonContainer>
    </S.HeaderContainer>
  );
};

export default Header;
