import { IPrimaryButtonProps } from "./type" 
import { Oval } from 'react-loader-spinner';
import './style.css'

const PrimaryButton = ({title, isLoading, className, onClick}: IPrimaryButtonProps) => {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center justify-center primary__button ${className}`}
    >
        <span className="primary__button-text">{isLoading ? "Loading.." : title}</span>
        {isLoading && <Oval height="22" width="22" color="white" ariaLabel="loading" />}
    </div>
  )
}

export default PrimaryButton