// react
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// styled
import styled from "styled-components";

// component
import moment from "moment";

const Memo = (props) => {
  const params = useParams();
  // 메모 title
  const [memoTitle, setMemoTitle] = useState("");
  // 메모 content
  const [memoContent, setMemoContent] = useState("");
  // 해당 페이지의 날짜
  const [todayMemoDate, setTodayMemoDate] = useState("");

  useEffect(() => {
    setTodayMemoDate(moment().format("YYYY. MM. "));
  }, []);

  // save validate
  // 제목 및 내용 빈값인 경우
  const onTitleValidate = () => {
    if (!memoTitle) {
      alert("메모 제목을 입력해주세요.");
      return false;
    }
    return true;
  };
  const onContentValidate = () => {
    if (!memoContent) {
      alert("메모 내용을 입력해주세요.");
      return false;
    }
    return true;
  };

  const onValidate = () => {
    if (!onTitleValidate()) {
      return false;
    }
    if (!onContentValidate()) {
      return false;
    }
    return true;
  };

  // on save
  // 백엔드가 없으므로 있다는 가정 하에 진행
  // 실제로 내용 저장 안됨
  const onSave = () => {
    if (!onValidate()) {
      return;
    }

    alert("저장이 완료되었습니다!");
    window.location.replace("/");
  };

  return (
    <Container>
      <MemoHeader>
        {todayMemoDate} {params.id}
      </MemoHeader>

      <MemoWarp>
        <MemoTitle
          placeholder="제목을 입력해주세요."
          type="text"
          value={memoTitle}
          onChange={(e) => setMemoTitle(e.target.value)}
        ></MemoTitle>
        <MemoContent
          placeholder="내용을 입력해주세요."
          value={memoContent}
          onChange={(e) => {
            setMemoContent(e.target.value);
          }}
        ></MemoContent>

        <MemoButtonWrap>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <MemoCancleButton>취소</MemoCancleButton>
          </Link>
          <MemoConfirmButton onClick={onSave}>저장</MemoConfirmButton>
        </MemoButtonWrap>
      </MemoWarp>
    </Container>
  );
};

export default Memo;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
`;

const MemoHeader = styled.div`
  width: 100%;
  height: 100px;
  font-size: 30px;
  text-align: center;
  line-height: 100px;
  border-bottom: 1px solid gray;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const MemoWarp = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  position: relative;
  margin: 10vh auto 0;
`;

const MemoTitle = styled.input`
  width: 50%;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #efefef;
  outline: none;
  margin-bottom: 30px;
  padding: 10px;
`;

const MemoContent = styled.textarea`
  width: calc(100% - 22px);
  height: 50vh;
  border-radius: 10px;
  border: 1px solid #efefef;
  outline: none;
  padding: 10px;
  resize: none;
`;

const MemoButtonWrap = styled.div`
  width: 100%;
  height: 30px;
  margin: 30px 0;
  display: flex;
`;

const MemoCancleButton = styled.div`
  position: absolute;
  right: 150px;
  width: 100px;
  height: 30px;
  border: 1px solid #efefef;
  border-radius: 10px;
  font-size: 15px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
    color: #000;
  }
`;

const MemoConfirmButton = styled.div`
  width: 100px;
  height: 30px;
  border: 1px solid #efefef;
  border-radius: 10px;
  font-size: 15px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  position: absolute;
  right: 0;

  &:hover {
    background-color: #efefef;
    color: #000;
  }
`;
