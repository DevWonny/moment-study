// react
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// styled
import styled from "styled-components";

// moment
import moment from "moment";

const Header = (props) => {
  const { todayMonth, setTodayMonth, todayYear, setTodayYear } = props;

  useEffect(() => {
    setTodayYear(moment().format("YYYY"));
    setTodayMonth(moment().format("MM"));
  }, []);

  // prev버튼 클릭시 이벤트
  const onClickPrev = () => {
    setTodayMonth((prev) => (prev - 1).toString().padStart(2, "0"));

    if (todayMonth <= 1) {
      setTodayYear((prev) => prev - 1);
      setTodayMonth(12);
    }
  };

  // next버튼 클릭시 이벤트
  const onClickNext = () => {
    setTodayMonth((next) => (parseInt(next) + 1).toString().padStart(2, "0"));

    if (todayMonth >= 12) {
      setTodayYear((next) => parseInt(next) + 1);
      setTodayMonth("01");
    }
  };

  return (
    <Title>
      <TitleContent>
        <PrevBtn onClick={onClickPrev}>PREV</PrevBtn>
        {todayYear}.{todayMonth}
        <NextBtn onClick={onClickNext}>NEXT</NextBtn>
      </TitleContent>
    </Title>
  );
};

export default Header;

const Title = styled.div`
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

const TitleContent = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PrevBtn = styled.div`
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

const NextBtn = styled.div`
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
