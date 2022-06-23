import React from 'react'
import { FiAlertCircle } from 'react-icons/fi';
import { MdOutlineDoneAll, MdOutlineWarning } from 'react-icons/md';
import { IMessage } from '../../Hooks/useSlotsHook/type'
import './styles.css';


const ErrorMessage = ({type , message}: IMessage) => {
   const _renderIcon = () => {
        switch (type) {
            case 'error':
                return <FiAlertCircle className="error__message-icon" />
            case 'success':
                return <MdOutlineDoneAll className="success__message-icon" />
            default:
                return <MdOutlineWarning className="warning__message-icon" />;
        }
    }
  return (
    <div className="error__message-container">
        {_renderIcon()}
      <p className="error__message">{message}</p>
    </div>
  );
}

export default ErrorMessage;