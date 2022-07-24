import * as S from "components/common/Navbar.styled";
import { Link, useLocation } from "react-router-dom";
import { MainSVG, TranslateSVG, LogSVG } from "assets/svg";

const Navbar = () => {
  const location = useLocation();
  return (
    <S.NavbarContainer>
      <Link to="/">
        <S.NavbarItem1
          style={{
            background: location.pathname === "/" && "#E8FBF1",
            borderRight: location.pathname === "/" && "2px solid #10AB5A",
          }}
        >
          <MainSVG />
        </S.NavbarItem1>
      </Link>
      <Link to="/translate">
        <S.NavbarItem2
          style={{
            background: location.pathname === "/translate" && "#e4eeff",
            borderRight:
              location.pathname === "/translate" && "2px solid #4285f4",
          }}
        >
          <TranslateSVG />
        </S.NavbarItem2>
      </Link>
      <Link to="/log">
        <S.NavbarItem3
          style={{
            background: location.pathname === "/log" && "#fff4db",
            borderRight: location.pathname === "/log" && "2px solid #f4bf4f",
          }}
        >
          <LogSVG />
        </S.NavbarItem3>
      </Link>
    </S.NavbarContainer>
  );
};

export default Navbar;
