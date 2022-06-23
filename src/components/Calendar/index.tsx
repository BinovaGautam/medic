import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style.css'
import { ICalanderProps } from './types';

const CalendarComp = ({onChange,date}:ICalanderProps) => {
    const [value, setValue] = useState<Date>(date || new Date());
    
    const handleChange = (nextValue:Date) => setValue(nextValue)

    useEffect(() => {
        onChange && onChange(value)
    } , [value])

    return (
        <div>
            <Calendar 
                onChange={handleChange}
                value={value}
                minDate={new Date()}
            />
        </div>
    )
}

export default CalendarComp