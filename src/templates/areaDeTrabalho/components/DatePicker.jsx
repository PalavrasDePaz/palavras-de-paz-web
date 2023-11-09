/* eslint-disable no-magic-numbers */
import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import { FaChevronDown } from "react-icons/fa"; // Substitua pela sua biblioteca de ícones

import ArrowLeft from "../../../../public/static/images/icons/arrow-left.png";
import ArrowRight from "../../../../public/static/images/icons/arrow-right.png";
import calendarIcon from "../../../../public/static/images/icons/calendar.svg";

import Styles from "../styles/Dados.module.css";

const CustomDatePicker = ({ selectedDate, setSelectDate }) => {
  CustomDatePicker.propTypes = {
    selectedDate: PropTypes.instanceOf(Date).isRequired,
    setSelectDate: PropTypes.func.isRequired,
  };
  const years = Array.from(new Array(10), (_, i) => i + 2014);

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      locale={ptBR}
      selected={selectedDate}
      onChange={(date) => setSelectDate(date)}
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className={Styles.calendarioHeader}>
          <button
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
            className={Styles.calendarioButton}
          >
            <Image src={ArrowRight} width={20} height={20} />
          </button>

          <div className={Styles.calendarioSelect}>
            <select
              value={months[date.getMonth()]}
              className={Styles.calendarioSelect}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))}
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <FaChevronDown className={Styles.arrowDown} />
          </div>
          <div className={Styles.calendarioSelect}>
            <select
              value={date.getFullYear()}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <FaChevronDown className={Styles.arrowDown} />
          </div>

          <button
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
            className={Styles.calendarioButton}
          >
            <Image src={ArrowLeft} width={20} height={20} />
          </button>
        </div>
      )}
      customInput={
        <button className={Styles.btnDatePicker}>
          <Image src={calendarIcon} width={20} height={20} />
          <span>
            {format(selectedDate, "dd MMMM yyyy", {
              locale: ptBR,
            })}
          </span>
        </button>
      }
    />
  );
};

export default CustomDatePicker;
