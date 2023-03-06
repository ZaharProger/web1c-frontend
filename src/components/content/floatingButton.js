import "../../styles/floatingButton.css"

const FloatingButton = ({ icon, onClick }) => {
    return (
        <div className="FloatingButton" icon={icon} onClick={onClick}>
            {icon}
        </div>
    )
}
export default FloatingButton;