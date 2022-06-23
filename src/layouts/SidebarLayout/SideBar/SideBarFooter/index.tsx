import { SidebarMenuItem } from '../../../../components';
import menuItems,{IItem as IMenuItem} from '../../../../menu-items'
import './style.css'

const { bottomMenu } = menuItems

const SidebarFooter = () => {
  return (
    <div className="sidebar__footer">
      {bottomMenu?.map((item: IMenuItem, index: number) => (
        <SidebarMenuItem key={index} {...item} />
      ))}
    </div>
  );
}

export default SidebarFooter