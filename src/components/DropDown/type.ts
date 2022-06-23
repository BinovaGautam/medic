export interface IDropDownItem {
    key: string;
    title: string;
}


export interface IDropDownProps {
    classNames?: string;
    value: IDropDownItem;
    options: IDropDownItem[];
    setValue: (value: IDropDownItem) => void;
}