import * as S from "components/log/LogContent.styled";
import { Title, TitleLine } from "components/common/shared";
import { LogMessage } from "components/log";
import { useState, useEffect } from "react";

const LogContent = () => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    fetch("https://api.handsof.today/chat/slack/62dbd9ba9e804cba2f19ea16", {})
      .then((response) => response.json())
      .then((data) => {
        setMessageList(data);
      });
  }, []);

  return (
    <>
      <Title>
        채팅 목록<span style={{ color: "#F4BF4F" }}>.</span>
        <TitleLine />
      </Title>
      <S.LogContentContainer>
        {messageList.map((e) => (
          <LogMessage key={e.id} date={e.createdAt} text={e.message} />
        ))}
      </S.LogContentContainer>
    </>
  );
};

export default LogContent;
