import { Navigate } from "react-router-dom";
import { RouteObject } from "react-router"
import { Suspense, lazy } from "react";

// Layout Import 
import BaseLayout from "./layouts/BaseLayout";
import SideBarLayout from "./layouts/SidebarLayout";

// Components Import 
import { SuspenseLoader } from "./components";

const Loader = (Component:any) => (props:any) => 
    (
        <Suspense fallback={<SuspenseLoader />}>
            <Component {...props} />
        </Suspense>
    );

// Pages
const CreateSlots = Loader(lazy(() => import('./views/CreateSlots')))
const ListSlots = Loader(lazy(() => import('./views/ListSlots')))


const routes: RouteObject[] = [
    {
        path: '',
        element: <SideBarLayout />,
        children: [
            {
                path: '/',
                element: <h2>Overview</h2>
            },
            {
                path: '/appointment/create-slots',
                element: <CreateSlots />
            },
            {
                path: '/appointment/list-score',
                element: <ListSlots />
            },
            {
                path: 'route-1',
                element: <Navigate to="/" replace />
            }
        ]
    }
]

export default routes