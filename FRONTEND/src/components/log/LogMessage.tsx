import * as S from "components/log/LogMessage.styled";

const LogMessage = (props) => {
  return (
    <>
      <S.LogDate>{props.date}</S.LogDate>
      <S.LogText>{props.text}</S.LogText>
    </>
  );
};

export default LogMessage;
