import { Container } from "components/common/shared";
import { LogContent, LogBar } from "components/log";

const Log = () => {
  return (
    <>
      <LogBar />
      <Container>
        <LogContent />
      </Container>
    </>
  );
};

export default Log;
