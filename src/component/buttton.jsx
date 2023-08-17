import "./button.css"


// eslint-disable-next-line react/prop-types
function Button({label,onClick,isDisabled}){
    

    return (
        <>
        <div className="buttonDiv">
        <button className="desabled__Button" disabled={isDisabled} onClick={onClick}>{label}</button>        
        </div>
        </>
    )
}

export default Button;  