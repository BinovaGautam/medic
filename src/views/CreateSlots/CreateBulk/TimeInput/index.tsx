import { useState } from 'react'
import { DropDown } from '../../../../components'
import { IDropDownItem } from '../../../../components/DropDown/type'
import './style.css'
import { ITimeInput } from './type'

const TimeInput = ({hourTitle, minTitle, setHour, setMin, bottomText,minStartHour,minStartMin,message}: ITimeInput) => {
    
  
    const blank = {
        key: "--",
        title: "--"
    }

    const minuteFactor : number = minStartMin !== undefined ? Number((60 - Number(minStartMin)) / 15)*(-1) : 0
    const hourFactor : number = minStartHour !== undefined ? Number(24 - Number(minStartHour))*(-1) : 24
    
    const hourList = generateList(24, 1).slice(hourFactor) // Array of hours in 24 hours format
    const [startHour, setStartHour] = useState<IDropDownItem>(blank)

    let minList = [ // Array of minutes in 15 min format
        {
          key: "00",
          title: "00",
        },
        {
          key: "15",
          title: "15",
        },
        {
          key: "30",
          title: "30",
        },
        {
          key: "45",
          title: "45",
        },
    ]
    minList = minList.slice(minuteFactor)
    const [startMin, setStartMin] = useState<IDropDownItem>(blank)

    const onHourChange = (value:IDropDownItem) => {
        setHour(value)
        setStartHour(value)
    }

    const onMinChange = (value:IDropDownItem) => {
        setMin(value)
        setStartMin(value)
    }

    return (
      <div className="input__time">
        <div className="flex flex-col input__time-start">
          <div className="flex input__time-start__time">
            <div className="flex flex-col input__time-start__hour">
              <h5 className="input__time-start__hour-heading">{hourTitle}</h5>
              <DropDown
                classNames="input__time-dropdown"
                options={hourList}
                value={startHour}
                setValue={onHourChange}
              />
            </div>
            <div className="flex flex-col input__time-start__hour">
              <h5 className="input__time-start__hour-heading">{minTitle}</h5>
              <DropDown
                classNames="input__time-dropdown"
                options={minList}
                value={startMin}
                setValue={onMinChange}
              />
            </div>
          </div>
          <p className="input__time-start__description">{bottomText}</p>
          {message &&  <p className="input__time-warn__text">{message.message}</p>}
        </div>
      </div>
    );
}

export default TimeInput

const generateList = (length: number, padding: number) => {
    const list = Array.from({length}, (_, index) => {
      
      let zeroStr = '00'
      let value = zeroStr.substring(`${index-1}`.length) + (index + padding - 1);
      
      if (value.length === 1) {
        value = '00'
      }
  
      return{
        key: value,
        title: value
      }
    })
    return list
}