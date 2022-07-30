import React, { useState } from "react";

import styled from "styled-components";

const Memo = (props) => {
  // 메모 날짜
  const { today } = props;
  // 메모 title
  const [memoTitle, setMemoTitle] = useState("");
  // 메모 content
  const [memoContent, setMemoContent] = useState("");

  return (
    <Container>
      <Date></Date>
      <MemoTitle></MemoTitle>
      <MemoContent></MemoContent>
    </Container>
  );
};

export default Memo;

const Container = styled.div``;

const Date = styled.div``;

const MemoTitle = styled.input``;

const MemoContent = styled.div``;
