import SidebarLayoutBodyHeader from '../../viewComponents/SidebarLayoutBodyHeader'
import './style.css'
import { BiSearch } from 'react-icons/bi'
import PrimaryButton from '../../components/PrimaryButton'
import moment from 'moment'
import ListTable from './ListTable'
import useSlotsHook from '../../Hooks/useSlotsHook'
import { useEffect, useState } from 'react'
import SearchAndDate from './SearchnDate'
import { ISlotItem } from '../../Hooks/useSlotsHook/type'

const ListSlots = () => {
  const {slots,getSlotsByDate} = useSlotsHook()
  const [data , setData] = useState<ISlotItem[]>([])
 
  // 

  
  const handleDateChange = async (date: Date) => {
    let tempSlots =  getSlotsByDate(date)
    setData(tempSlots)
  }

  return (
    <div className="list__slots">
      <SidebarLayoutBodyHeader title={"List Slots - " + `(${slots.length})`  }/>
      <div className="flex items-center justify-between list__slots-header">
        <SearchAndDate onDateChange={handleDateChange} />
        <PrimaryButton onClick={() => {}} className="list__slots-header__button" title="Search" isLoading={false} />
      </div>
      <ListTable data={data} />
    </div>
  )
}

export default ListSlots




//onChange={e => alert('CHANGED ')} value={"22/11/2022"}