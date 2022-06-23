import { useState } from "react";
import { Calendar, DropDown, ErrorMessage } from "../../../components";
import { IDropDownItem } from "../../../components/DropDown/type";
import PrimaryButton from "../../../components/PrimaryButton";
import useDatenTime from "../../../Hooks/useDatenTime";
import useSlotsHook from "../../../Hooks/useSlotsHook";
import { ISlotItem } from "../../../Hooks/useSlotsHook/type";
import CreateBulkStep from "./CreateStep";
import "./style.css";
import TimeInput from "./TimeInput";

const CreateBulk = () => {
  const {
    date,
    handleChangeDate,
    onHourChange,
    onMinChange,
    onEndHourChange,
    onEndMinChange,
    startHour,
    startMin,
    endHour,
    endMin,
    startTimeAttr,
    endTimeAttr
  } = useDatenTime();
  const [capacity , setCapacity] = useState<number>(0)

  const handeCapacity = (e: React.ChangeEvent<HTMLInputElement>) =>  setCapacity(Number(e.target.value))

  const {
    message,
    initiateAddSlots,
    loading,
    slots: savedSlots,
  } = useSlotsHook();
  
 
  const handleSubmit = async() => {
      initiateAddSlots({date,startHour,startMin,endHour,endMin,capacity})
  }


  return (
    <div className="flex flex-col create__bulk">
      <div className="create__bulk-steps">
        <CreateBulkStep
          heading="1. SELECT DATE OF APPOINTMENT *"
          description="Please select the dates that you'd like to open up slots."
          Tool={<Calendar onChange={handleChangeDate} date={date} />}
        />

        <CreateBulkStep
          heading="2. SELECT THE HOURS *"
          description="Please select the Start and End Time."
          Tool={
            <div
              className="flex justify-between"
              style={{
                columnGap: "1rem",
              }}
            >
              <TimeInput
                hourTitle="Start Hour"
                minTitle="Minutes"
                setHour={onHourChange}
                setMin={onMinChange}
                bottomText="Please select the Start Time."
                {...startTimeAttr}
              />
              <div className="create__bulk-step__tool-seperator">
                <span>:</span>
              </div>
              <TimeInput
                hourTitle="End Hour"
                minTitle="Minutes"
                setHour={onEndHourChange}
                setMin={onEndMinChange}
                {...endTimeAttr}
                bottomText="Please select the time your last 15 min Block Starts."
              />
            </div>
          }
        />

        <CreateBulkStep
          heading="3. CHOOSE SEATING CAPACITY *"
          description="Please enter total Seating Capacity."
          Tool={
            <input
              onChange={handeCapacity}
              type="number"
              className="seat__capacity"
            />
          }
        />
      </div>

      <div className="create__bulk-button__container">
        <PrimaryButton
          onClick={handleSubmit}
          title="Create Slots"
          isLoading={loading}
          className="create__bulk-action__button"
        />
       {message && <ErrorMessage {...message} />}
      </div>
    </div>
  );
};

export default CreateBulk;
