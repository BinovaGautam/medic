import { useEffect, useState } from "react";
import { IMessage, IPayload, ISlotItem } from "./type";


const useSlotsHook = () => {
    const [slots, setSlots] = useState<ISlotItem[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<IMessage>();

    const getSlots = async () => {
        setLoading(true);
        try {
           //get slots data from localstorage if exists
            const locaSlots :string = localStorage.getItem("slots") || "[]";
            // console.log("SLOTS", locaSlots);
            if (slots) {
                setSlots(JSON.parse(locaSlots));
            }
            setLoading(false);

        } catch (err : any) {
            setMessage({type:'error', message: "Error while getting slots"});
        }
        setLoading(false);
    }

    const checkDuplicate = (slot: ISlotItem) => {
        const duplicate = slots.every(
          (item: ISlotItem) =>
            item.date === slot.date &&
            item.startHour === slot.startHour &&
            item.startMin == slot.startMin
        );
        console.log("DUPLICATE", duplicate, slot, slots);
        return false;
    }
        

    const addSlot = async (slot: ISlotItem) => {
        setLoading(true);
        //add slots to localstorage
        const duplicate = checkDuplicate(slot);
        if(duplicate){
            setMessage({type:'warn', message: "The time slot already exists"});
            return;
        }
        slots.push(slot);
        setSlots([...slots])
        setLoading(false);

    }

    const updateSlot = async (slot: ISlotItem) => {
        setLoading(true);
        //update slots in localstorage
        const index = slots.findIndex((item : ISlotItem) => item.slotId === slot.slotId);
        if(index !== -1) {
            const duplicate = checkDuplicate(slot);
            if(duplicate){
                setMessage({type:'warn', message: "The Time Slot already exists"});
                return;
            }
            slots[index] = slot;
            setSlots([...slots])
        }
        setLoading(false);
    }

    const deleteSlot = async (slotId: string) => {
        setLoading(true);
        //delete slot from localstorage
        const index = slots.findIndex((item : ISlotItem) => item.slotId === slotId);
        if(index !== -1) {
            slots.splice(index, 1);
            setSlots([...slots])
        }
        setLoading(false);
    }

    const addBulkSlots = async (slotsObjArr: ISlotItem[]) => {
        setLoading(true);
        //add slotsObjArr to localstorage
        slotsObjArr.forEach(async (slot : ISlotItem) => {
            const duplicate = checkDuplicate(slot);
            console.log('DUPLICATE',duplicate)
            if(duplicate){
                setMessage({type:'warn', message: "The Time Slot already exists"});
                return;
            }
            slots.push(slot);
        }
        );
        setSlots([...slots])
        setLoading(false);
    }

    const initiateAddSlots = async ({date , startHour , startMin , endHour , endMin , capacity} : IPayload) => {
        setLoading(true);
        const isEnabled = //Check if all the fields are filled up or not
        date &&
        startHour !== undefined &&
        startMin !== undefined &&
        endHour !== undefined &&
        endMin !== undefined &&
        capacity  !== undefined  && capacity > 0;

        if (isEnabled) {
            //  calculate total time and then number of slots
            const totalTime =(endHour - startHour) * 60 + (endMin - startMin);
            const slots = totalTime / 15 + 1;
            const slotsArray = Array.from({ length: slots }, (_, i) => i);
            const slotsObjArray: ISlotItem[] = slotsArray.map((i) => {
            const slot: ISlotItem = {
                    slotId: "id_" + i,
                    date: date.toDateString(),
                    startHour: startHour + Math.floor(i / 4),
                    startMin: (startMin + i * 15) % 60,
                    slotCapacity:
                    Math.floor(capacity / slots) +(capacity % slots >= slots - i ? 1 : 0),
                };
                return slot;
            });
            console.log("slotsObjArray", slotsObjArray);
            addBulkSlots(slotsObjArray);

            setMessage({type:'success', message: "Slots added successfully"});
            // setLoading(false);
            
        }else{
            setLoading(false);
            setMessage({type:'error', message: "Please fill all the fields"});
        }
    }

    const getSlotsByDate =  (date: Date) => {
        setLoading(true);
        //get slots by date from localstorage
        const localSlots = localStorage.getItem("slots") || "[]";
        const slotsByDate = JSON.parse(localSlots).filter((item : ISlotItem) => item.date == new Date(date).toDateString());
        setLoading(false);
        return slotsByDate;
    }


    useEffect(() => {
        getSlots();
    }, []);

    useEffect(() => {
        slots.length && localStorage.setItem("slots", JSON.stringify(slots));
    }, [slots]);   //save slots to localstorage when slots changes

    return {
      slots,
      loading,
      message,
      addSlot,
      updateSlot,
      deleteSlot,
      checkDuplicate,
      addBulkSlots,
      initiateAddSlots,
      getSlotsByDate
    };
}


export default useSlotsHook;