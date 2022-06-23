import React from 'react'
import useSlotsHook from '../../Hooks/useSlotsHook';
import { MdModeEditOutline, MdDelete, } from "react-icons/md"
import { BiSquareRounded } from 'react-icons/bi';
import { ISlotItem } from '../../Hooks/useSlotsHook/type';
import moment from 'moment';

type Props = {
    data: ISlotItem[],
}


const ListTable = ({data}: Props) => {
    const {slots} = useSlotsHook()
  return (
    <div className="list__slots-table__container">
      <div className="list__slots-table__scroll">
        <table className="table">
          <thead>
            <tr className="table-header">
              <th className="head-cell"></th>
              <th className="align-center head-cell">Start Timing</th>
              <th className="align-center head-cell">Seating Capacity</th>
              <th className="align-right head-cell">Manage</th>
            </tr>
          </thead>

          <tbody className="table__body">
            {
                data?.map((slot : ISlotItem, index : number) => {
                    let endTime = moment(slot.startHour+':'+slot.startMin,"HH:mm").add(15, 'minutes').format('HH:mm')
                    return (
                         <tr key={index} className="table__data-row">
                            <td className="cell">
                                <BiSquareRounded className="td__icon" />
                            </td>
                            <td className="align-center cell">
                                <span>{slot.startHour}:{slot.startMin} - {endTime} </span>
                            </td>
                            <td className="align-center cell">{slot.slotCapacity} </td>
                            <td className="align-right cell">
                                <div className="flex items-center td__icons">
                                <MdModeEditOutline className="td__icon" />
                                <MdDelete className="td__icon" />
                                </div>
                            </td>
                            </tr>
                    )
                })
            }
           
           
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default ListTable;