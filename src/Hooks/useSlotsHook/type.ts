export interface ISlotItem {
   startHour: number;
    startMin: number;
    slotId: string;
    slotCapacity : number;
    date: string;
}

export interface IMessage {
    message ?: string;
    type ?: string;

}

export interface IPayload {
    date : Date;
    startHour ?: number;
    startMin ?: number;
    endHour ?: number;
    endMin ?: number;
    capacity ?: number;
    

}