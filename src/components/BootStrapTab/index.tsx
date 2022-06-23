import { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { IBootstrapTab } from './type'

const BootstrapTab = ({classNames, tabList, selected}: IBootstrapTab) => {
    const [key, setKey] = useState<string | undefined | null>(selected)

    return (
        <Tabs
            activeKey={key || selected}
            onSelect={(k) => setKey(k)}
            className={classNames}
        >
            {tabList.map((tab, index) => (
                <Tab key={index} eventKey={tab.key} title={tab.title}>
                    {tab.Component}
                </Tab>
            ))}
        </Tabs>
    )
}

export default BootstrapTab