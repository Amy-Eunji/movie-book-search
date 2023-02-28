import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  return (
    <Wrapper>
      <PageTitle>영화 🎬 & 책 📚 검색</PageTitle>
      <Link to="/Movie">
        <Button>영화 🎬</Button>
      </Link>
      <Link to="/Book">
        <Button>책 📚</Button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 15px;
`;
const PageTitle = styled.h2`
  text-align: center;
`;
const Button = styled.button`
  width: 100%;
  margin: 10px 0;
  height: 100px;
  font-size: 24px;
  border: none;
  border-radius: 4px;
`;

export default Main;
