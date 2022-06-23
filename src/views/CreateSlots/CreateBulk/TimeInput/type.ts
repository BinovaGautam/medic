import { IDropDownItem } from "../../../../components/DropDown/type";
import { IMessage } from "../../../../Hooks/useSlotsHook/type";

export interface ITimeInput {
    hourTitle: string;
    setHour: (hour:IDropDownItem) => void;
    minTitle: string;
    setMin: (min:IDropDownItem) => void;
    bottomText: string;
    minStartHour ?: number;
    minStartMin ?: number;
    message ?: IMessage
}