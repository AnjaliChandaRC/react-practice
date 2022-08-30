import React, { useState } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
const DatePicker = () => {
  //   return (
  //     <>
  //       <div className="text-center py-5">
  //         <p className="fs-1 fw-bold">DATEPICKER</p>
  //         <DateRangePicker
  //           initialSettings={{ startDate: "1/1/2022", endDate: "3/1/2022" }}
  //         >
  //           <button>Date</button>
  //         </DateRangePicker>
  //       </div>
  //     </>
  //   );
  //   const [startDate, setStartDate] = useState(new Date());
  //   const years = range(1990, getYear(new Date()) + 1, 1);
  //   const months = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "October",
  //     "November",
  //     "December",
  //   ];
  //   return (
  //     <DatePicker
  //       renderCustomHeader={({
  //         date,
  //         changeYear,
  //         changeMonth,
  //         decreaseMonth,
  //         increaseMonth,
  //         prevMonthButtonDisabled,
  //         nextMonthButtonDisabled,
  //       }) => (
  //         <div
  //           style={{
  //             margin: 10,
  //             display: "flex",
  //             justifyContent: "center",
  //           }}
  //         >
  //           <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
  //             {"<"}
  //           </button>
  //           <select
  //             value={getYear(date)}
  //             onChange={({ target: { value } }) => changeYear(value)}
  //           >
  //             {years.map((option) => (
  //               <option key={option} value={option}>
  //                 {option}
  //               </option>
  //             ))}
  //           </select>
  //           <select
  //             value={months[getMonth(date)]}
  //             onChange={({ target: { value } }) =>
  //               changeMonth(months.indexOf(value))
  //             }
  //           >
  //             {months.map((option) => (
  //               <option key={option} value={option}>
  //                 {option}
  //               </option>
  //             ))}
  //           </select>
  //           <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
  //             {">"}
  //           </button>
  //         </div>
  //       )}
  //       selected={startDate}
  //       onChange={(date) => setStartDate(date)}
  //     />
  //   );
};

export default DatePicker;
