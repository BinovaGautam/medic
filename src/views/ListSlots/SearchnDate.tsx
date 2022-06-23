import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi';

type Props = {
    onDateChange: (date: any) => void;
}

const SearchAndDate = ({ onDateChange }: Props) => {
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));

  const handleChange = (e: any) => {
    setDate(e.target.value);
    console.log(e.target.value);
    onDateChange(e.target.value);
    }

  useEffect(() => {
    onDateChange(moment().format("YYYY-MM-DD"));
    }
    , [])
  return (
    <div className="search__date">
      <div className="search">
        <input type="text" className="search__input" placeholder="Search" />
        <div className="flex items-center justify-center search__icon-wrapper">
          <BiSearch className="search__icon" />
        </div>
      </div>
      <div className="date">
        <input type="date" value={date}  onChange={handleChange} className="date__input" />
      </div>
    </div>
  );
};

export default SearchAndDate;
