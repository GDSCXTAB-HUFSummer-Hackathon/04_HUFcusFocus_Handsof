import * as S from "components/log/LogBar.styled";
import { o_slack, google, jandi, kakao, discord, gmail, add } from "assets/img";

const LogBar = () => {
  return (
    <S.LogBarContainer>
      <S.LogBarItem
        src={o_slack}
        alt="o_slack"
        width={"49px"}
        height={"49px"}
      ></S.LogBarItem>
      <S.LogBarItem
        src={google}
        alt="google"
        width={"32px"}
        height={"32px"}
      ></S.LogBarItem>
      <S.LogBarItem
        src={jandi}
        alt="jandi"
        width={"28px"}
        height={"28px"}
      ></S.LogBarItem>
      <S.LogBarItem
        src={kakao}
        alt="kakao"
        width={"28px"}
        height={"28px"}
      ></S.LogBarItem>
      <S.LogBarItem
        src={discord}
        alt="discord"
        width={"32px"}
        height={"32px"}
      ></S.LogBarItem>
      <S.LogBarItem
        src={gmail}
        alt="gmail"
        width={"28px"}
        height={"20px"}
      ></S.LogBarItem>
      <S.LogBarItem
        src={add}
        alt="add"
        width={"23px"}
        height={"23px"}
      ></S.LogBarItem>
    </S.LogBarContainer>
  );
};

export default LogBar;
