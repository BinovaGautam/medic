export interface ITab {
    key: string;
    title: string;
    Component: React.ReactNode;
}



export interface IBootstrapTab{
    classNames?: string;
    tabList: ITab[];
    selected: string;
}