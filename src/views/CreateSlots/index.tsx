import { BootstrapTab } from '../../components'
import SidebarLayoutBodyHeader from '../../viewComponents/SidebarLayoutBodyHeader'
import CreateBulk from './CreateBulk'
import CreateOne from './CreateOne'
import './style.css'

const CreateSlot = () => {
  return (
    <div className="create__slot">
      <SidebarLayoutBodyHeader title="Create Slot" />
      <div className="create__slot-body">
        <BootstrapTab 
          classNames="create__slot-tabs" 
          tabList={[
            {
              key: 'create-bulk',
              title: 'Create Bulk 15 Min. Slots',
              Component: <CreateBulk />
            },
            {
              key: 'create-one',
              title: 'Create One Slots',
              Component: <CreateOne />
            }
          ]}
          selected="create-bulk"
        />
      </div>
    </div>
  )
}

export default CreateSlot