import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from 'react';

const Filters = (props) => {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  let [sortBtnFlip, toggleSortBtns] = useState("");
  let [filterBtnOn, setFilterBtnOn] = useState(false);

  function range(start, end) {
    var ans = [];
    for (let i = start; i >= end; i--) {
      ans.push(i);
    }
    return ans;
  }

  function datePickerCustom() {
    const today = new Date();
    const years = range(today.getFullYear(), 2000);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    
    return (
      <React.Fragment>
        <div className="col-md-2 col-sm-6 col-xs-6">
          <DatePicker
            selected={startDate}
            // className={dateInputClasses}
            placeholderText={"Select Start Date"}
            onChange={(date) => setStartDate(date)}
            className="text-gray-900"
            selectsStart
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div
                style={{
                  margin: 10,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                >
                  {"<"}
                </button>
                <select
                  value={date.getYear()}
                  onChange={({ target: { value } }) => changeYear(value)}
                >
                  {years.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <select
                  value={months[date.getMonth()]}
                  onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                  }
                >
                  {months.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <button
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                >
                  {">"}
                </button>
              </div>
            )}
          />
        </div>
        <div className="col-md-2 col-sm-6 col-xs-6">
          <DatePicker
            // className={dateInputClasses}
            placeholderText={"Select End Date"}
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="text-gray-900"
            selectsEnd
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div
                style={{
                  margin: 10,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                >
                  {"<"}
                </button>
                <select
                  value={date.getYear()}
                  onChange={({ target: { value } }) => changeYear(value)}
                >
                  {years.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <select
                  value={months[date.getMonth()]}
                  onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                  }
                >
                  {months.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <button
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                >
                  {">"}
                </button>
              </div>
            )}
            // selected={startDate}
            // onChange={(date) => setEndDate(date)}
          />
        </div>
      </React.Fragment>
    );
  }

  function filterData() {
    let filter = props.filter;
    // console.log(filter)
    if (startDate === null && endDate === null && filterBtnOn === false) {
      showAlert();
    } else if (
      startDate === null &&
      startDate === null &&
      filterBtnOn === true
    ) {
      sendSelectedType();
      filter(true);
    } else {
      sendSelectedDates();
    }
  }

  function clearFilterBtn() {
    let clearFilter = props.cleared;
    setStartDate(null);
    setEndDate(null);
    setFilterBtnOn(false);
    document.getElementById("projectType").value = "All Projects";
    clearFilter();
  }

  let projectTypes = ["All Projects", "Ongoing Projects", "Completed Projects"];


  function sendSelectedType() {
    let getType = props.type;
    let type = document.getElementById("projectType").value;
    if (type === projectTypes[1]) {
      getType("ongoing");
    } else if (type === projectTypes[2]) {
      getType("completed");
    } else getType("");
  }

  function sendSelectedDates() {
    let GetSelectedDates = props.clicked;
    const today = new Date();
    let Dates = "";
    if (
      startDate !== null &&
      startDate !== null &&
      startDate <= today &&
      endDate <= today &&
      startDate <= endDate
    ) {
      Dates = {
        startDate:
          "" +
          (startDate.getMonth() + 1) +
          "/" +
          startDate.getDate() +
          "/" +
          startDate.getFullYear(),
        endDate:
          "" +
          (endDate.getMonth() + 1) +
          "/" +
          endDate.getDate() +
          "/" +
          endDate.getFullYear(),
      };
      GetSelectedDates(Dates);
    } else {
    }

    // console.log(Dates);/
  }

  function toggleSortBtn() {
    let getOrder = props.ordered;
    if (sortBtnFlip === "") {
      toggleSortBtns("flip-v");
      getOrder(true);
    } else {
      toggleSortBtns("");
      getOrder(false);
    }
  }

 function filterBtnOnToggle() {
    setFilterBtnOn(true);
  }


  return (
    <div className="container">
      <div className="row">
        {datePickerCustom()}
        <div className="col-md-2 col-sm-6 col-xs-6 sm-mt-10">
          <select
            id="projectType"
            className="filter-select"
            onChange={filterBtnOnToggle}
          >
            {projectTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <div className={"sm-mt-10 "}>
            <button
              className={
                "btn datePick-btn btn-theme-colored"
              }
              onClick={filterData}
            >
              {"Filter"}
            </button>
            <button  onClick={clearFilterBtn}>
              {"Clear Filter"}
            </button>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 col-xs-6 sm-mt-10">
          {/* <p className="d-inline ml-0">{t("Sort By Date")}</p> */}
          <button
            className={"sort-btn d-inline "}
            onClick={toggleSortBtn}
          >
            {"Sort By Date" + " "}
            <i
              className={
                "fa fa-sort-amount-desc flip-none " 
              }
              id="sortingBtn"
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
