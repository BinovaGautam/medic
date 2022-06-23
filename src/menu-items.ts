import { VscHome } from 'react-icons/vsc'
import { FiLogOut } from 'react-icons/fi'
import { BsQuestionCircle } from 'react-icons/bs'


export interface IItem {
    id: string;
    title: string;
    type: string;
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    url?: string;
    children?: IItem[];
    matchedUrl?: () => void;
}

export interface IMenuItems {
    items: IItem[];
    bottomMenu: IItem[];
}

const menuItems: IMenuItems = {
    items: [
        {
            id: 'overview',
            title: 'Overview',
            type: 'group',
            Icon: VscHome,
            children: [
                {
                    id: 'appointment',
                    title: 'Appointment',
                    type: 'collapse',
                    children: [
                        {
                            id: 'createslots',
                            title: 'Create Slots',
                            type: 'item',
                            url: '/appointment/create-slots'
                        },
                        {
                            id: 'listslots',
                            title: 'List Slots',
                            type: 'item',
                            url: '/appointment/list-score'
                        },
                    ]
                }
            ]
        }
    ],
    bottomMenu: [
        {
            id: 'support',
            title: 'Support',
            type: 'item',
            url: '/support',
            Icon: BsQuestionCircle,
        },
        {
            id: 'logout',
            title: 'Log Out',
            type: 'item',
            url: '/logout',
            Icon: FiLogOut
        },
    ]
}


export default menuItems