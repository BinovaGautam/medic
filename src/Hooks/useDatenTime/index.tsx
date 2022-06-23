
/** 
 * Validate Selected Date n time
 * */
import { useEffect, useState } from "react"
import { IDropDownItem } from "../../components/DropDown/type"
import { IMessage } from "../useSlotsHook/type"

 
 

const useDatenTime = () => {
    const [date, setDate] = useState<Date>(new Date())
    const [startHour, setStartHour] = useState<number>()
    const [startMin, setStartMin] = useState<number>()
    const [endHour, setEndHour] = useState<number>()
    const [endMin, setEndMin] = useState<number>()
    const [message , setMessage] = useState<IMessage>()

    const isToday = date.toDateString() === new Date().toDateString();

    const handleChangeDate = (nextValue:Date) => {
        //check if the selected date is not from the past
        if (nextValue.getTime() > new Date().getTime()) {
            setDate(nextValue)
        }else{
            setMessage({type:'error', message: "Please select a date in the future"})
        }
    }

    const resetEndTime = () => {
        setEndHour(startHour)
        setEndMin(startMin)
    }

    const onHourChange = (value:IDropDownItem) => {
        //check if the selected hour is not from past
        setStartHour(Number(value.key))
    }

    const onMinChange = (value:IDropDownItem) => {
        setStartMin(Number(value.key))
    }

    const onEndHourChange = (value:IDropDownItem) => {
        setEndHour(Number(value.key))
    }

    const onEndMinChange = (value:IDropDownItem) => {
        setEndMin(Number(value.key))
    }

    /**
     * If Date is today then check if the selected time is not from past
     *  */ 
    const startTimeAttr = {
        minStartHour : isToday ?  date.getHours() + (date.getMinutes() > 45 ? 1 : 0) : 24,
        minStartMin :  isToday && date.getHours() === startHour ? date.getMinutes() : 0
    }

    const endTimeAttr = {
        minStartHour : startHour !== undefined && (startMin !== undefined)
            ? startMin === 45
            ? startHour + 1
            : startHour
            : 0
        ,
        minStartMin :  endHour !== undefined && startHour !== undefined && startMin !== undefined
            ? endHour > startHour
            ? 0
            : startMin 
            : 0
        

    }

   
 
    // useEffect(() => {
    //     resetEndTime()
    // }, [startHour, startMin])
    


    return{
        date,
        startHour,
        startMin,
        endHour,
        endMin,
        message,
        handleChangeDate,
        onHourChange,
        onMinChange,
        onEndHourChange,
        onEndMinChange,
        startTimeAttr,
        endTimeAttr

    }

}

export default useDatenTime