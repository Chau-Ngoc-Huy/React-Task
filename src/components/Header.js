import Button from './Button'

const Header = ({title, onShowAdd, showAdd}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text={showAdd ? 'Close' : 'Add'} color={showAdd ? 'red' : 'green'} onClick={onShowAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}
export default Header