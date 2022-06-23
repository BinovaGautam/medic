import { useEffect, useRef, useState } from 'react'
import './style.css'
import { IDropDownItem, IDropDownProps } from './type'

const DropDown = ({classNames, options, value, setValue}:IDropDownProps) => {
    const dropContainer = useRef<HTMLDivElement>(null)
    const [showList, setShowList] = useState<boolean>(false)

    const onClick = (value:IDropDownItem) => {
        setValue(value)
        setShowList(false)
    }

    useEffect(() => {
        const checkIfClickOutside = (e:any) => {
            if(!showList && dropContainer.current && !dropContainer.current.contains(e.target)) {
                setShowList(false)
            }
        }

        document.addEventListener('mousedown', checkIfClickOutside)
    },[])

  return (
    <div className={`dropdown ${classNames}`}>
      <div
        className="flex items-center justify-center dropdown__container"
        onClick={() => setShowList(true)}
      >
        {value.title}
      </div>
      <div
        ref={dropContainer}
        className={`dropdown__list scroll__hide ${!showList && "hide"}`}
      >
        <div className="flex justify-center flex-col">
          {options.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center dropdown__list-item 
               ${value.key === item.key && "dropdown__item-selected"}`}
              onClick={() => onClick(item)}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DropDown