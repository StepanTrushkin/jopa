import "./BlockList.modules.scss";
interface BlockListProps {
    children?: React.ReactNode;
}
function BlockList({ children }: BlockListProps) {
    return (<div className="blockList">
        {children}
        </div>);
}

export default BlockList;
