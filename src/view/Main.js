import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// styled
import styled from "styled-components";

// moment
import moment from "moment";

// component
import Header from "../components/Header";

const Main = () => {
  const dayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  // 년도
  const [todayYear, setTodayYear] = useState("");
  // 월
  const [todayMonth, setTodayMonth] = useState("");
  // 현재 보여지는 달의 마지막 날
  const [lastDate, setLastDate] = useState("");
  // 현재 보여지는 달의 첫날의 요일
  const [firstDay, setFirstDay] = useState("");
  // 현재 보여지는 달의 마지막날의 요일
  const [lastDay, setLastDay] = useState("");
  // 지난 달의 마지막 날짜
  const [prevLastDay, setPrevLastDay] = useState("");
  // 현재 달에 표시되어야 한 지난달 날짜 배열
  const [prevLastDayArray, setPrevLastDayArray] = useState([]);
  // 다음 달의 처음 날짜
  const [nextFirstDayArray, setNextFirstDayArray] = useState([]);
  // 현재 보여지는 달의 날짜 배열
  const [dateArray, setDateArray] = useState([]);
  // 전체 날짜
  const [totalDateArray, setTotalDateArray] = useState([]);
  // 오늘 날짜
  const [today, setToday] = useState("");
  // 현재 달이 아닌경우 현재달로 돌아가는 버튼 보여주기
  const [currentMonthViewButton, setCurrentMnthViewButton] = useState(false);

  let num = 0;

  useEffect(() => {
    if (todayYear && todayMonth) {
      // 이전 달의 마지막 날짜
      setPrevLastDay(
        moment([todayYear, 0, 31])
          .month(todayMonth - 2)
          .format("DD")
      );

      // 현재 보여지는 달의 마지막 날짜
      setLastDate(
        moment([todayYear, 0, 31])
          .month(todayMonth - 1)
          .format("DD")
      );

      // 현재 보여지는 달의 첫날 요일
      setFirstDay(moment([todayYear, todayMonth - 1, 1]).day());
    }
  }, [todayYear, todayMonth]);

  // 이전 달의 마지막 요일 배열
  useEffect(() => {
    if (prevLastDayArray.length > 0) {
      setPrevLastDayArray([]);
    }
    for (let i = prevLastDay - firstDay + 1; i <= prevLastDay; i++) {
      setPrevLastDayArray((prev) => [...prev, i]);
    }
  }, [prevLastDay, , firstDay]);

  // 현재 보여지는 달의 마지막날 요일
  useEffect(() => {
    setLastDay(moment([todayYear, todayMonth - 1, lastDate]).day());
  }, [todayYear, todayMonth, lastDate]);

  useEffect(() => {
    if (dateArray.length > 0) {
      setDateArray([]);
    }

    for (let i = 1; i <= lastDate; i++) {
      setDateArray((prev) => [...prev, i]);
    }
  }, [lastDate]);

  // 다음달의 첫 날짜들
  useEffect(() => {
    if (nextFirstDayArray.length > 0) {
      setNextFirstDayArray([]);
    }

    for (let i = 1; i <= 6 - lastDay; i++) {
      setNextFirstDayArray((prev) => [...prev, i]);
    }
  }, [lastDay]);

  // 달력에 표시될 전체 날짜
  useEffect(() => {
    if (totalDateArray.length > 0) {
      setTotalDateArray([]);
    }

    setTotalDateArray([
      ...prevLastDayArray,
      ...dateArray,
      ...nextFirstDayArray,
    ]);
  }, [prevLastDayArray, dateArray, nextFirstDayArray]);

  // 오늘 날짜
  useEffect(() => {
    setToday(moment().format("YYYYMMDD"));
  }, []);

  // 현재 달로 돌아가기 버튼 보이기
  useEffect(() => {
    if (
      todayYear !== moment().format("YYYY") ||
      todayMonth !== moment().format("MM")
    ) {
      setCurrentMnthViewButton(true);
    } else {
      setCurrentMnthViewButton(false);
    }
  }, [todayMonth, todayYear]);

  // 현재 달로 돌아가기
  const onMoveCurrentMonth = () => {
    setTodayYear(moment().format("YYYY"));
    setTodayMonth(moment().format("MM"));
  };

  return (
    <>
      <Header
        todayYear={todayYear}
        setTodayYear={setTodayYear}
        todayMonth={todayMonth}
        setTodayMonth={setTodayMonth}
      />

      {currentMonthViewButton && (
        <CurrentMonthButton onClick={onMoveCurrentMonth}>
          현재 달로 돌아가기
        </CurrentMonthButton>
      )}

      <CalendarWarp>
        <CalendarWeekWrap>
          {dayList.map((day, index) => {
            return (
              <CalendarWeekItem
                key={`main-calendar-week-item-${index}`}
                color={day}
              >
                {day}
              </CalendarWeekItem>
            );
          })}
        </CalendarWeekWrap>

        {totalDateArray.map((date, index) => {
          if ((index + 1) % 7 === 0) {
            return (
              <CalendarWeekWrap key={`main-calendar-week-warp-${index}`}>
                {totalDateArray.slice(num, index).map((date2, index2) => {
                  num = index + 1;
                  return (
                    <CalendarWeekItem
                      color={(index2 + 1) % 7 === 1 && "SUN"}
                      today={
                        today.slice(0, 4) === todayYear &&
                        today.slice(4, 6) === todayMonth &&
                        moment().day() === moment(today).day() &&
                        parseInt(today.slice(6)) === date2
                      }
                    >
                      <Link
                        to={`/memo/${date2}`}
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        {date2}
                      </Link>
                    </CalendarWeekItem>
                  );
                })}

                <CalendarWeekItem
                  color={"SAT"}
                  today={
                    today.slice(0, 4) === todayYear &&
                    today.slice(4, 6) === todayMonth &&
                    moment().day() === moment(today).day() &&
                    parseInt(today.slice(6)) === date
                  }
                >
                  <Link
                    to={`/memo/${date}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {date}
                  </Link>
                </CalendarWeekItem>
              </CalendarWeekWrap>
            );
          }
        })}
      </CalendarWarp>
    </>
  );
};

export default Main;

const CalendarWarp = styled.div`
  width: 80%;
  height: 60%;
  margin-top: 10vh;
  border: 1px solid #efefef;
  display: flex;
  flex-direction: column;
`;

const CalendarWeekWrap = styled.div`
  width: 100%;
  height: 10%;
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: space-between;
`;

const CalendarWeekItem = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: ${(props) =>
    props.color === "SAT" ? null : "1px solid #efefef"};
  border-left: ${(props) =>
    props.color === "SUN" ? null : "1px solid #efefef"};

  color: ${(props) =>
    props.color === "SUN"
      ? "#CD2E57"
      : props.color === "SAT"
      ? "#3232FF"
      : "#fff"};

  font-weight: ${(props) =>
    props.color === "SUN" || props.color === "SAT" ? "900" : "500"};

  background-color: ${(props) => props.today && "#FAFAB4"};
`;

const CurrentMonthButton = styled.div`
  width: 120px;
  height: 30px;
  border: 1px solid #efefef;
  border-radius: 10px;
  font-size: 15px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  font-size: 12px;
  position: absolute;
  top: 130px;
  right: 10%;

  &:hover {
    background-color: #efefef;
    color: #000;
  }
`;
