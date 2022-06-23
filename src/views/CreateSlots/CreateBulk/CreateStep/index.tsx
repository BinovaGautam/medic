import './style.css'
import { ICreateBulkStepProps } from './type'

const CreateBulkStep = ({heading, description, Tool}: ICreateBulkStepProps) => {
  return (
    <div className="create__bulk-step">
        <div className="create__bulk-step-container">
        <div className="create__bulk-step__content">
            <h5 className='create__bulk-step__heading'>{heading}</h5>
            <p className='create__bulk-step__description'>{description}</p>
        </div>
        <div className="create__bulk-step__tool">
            {Tool}
        </div>
        </div>
    </div>
  )
}

export default CreateBulkStep