const Popup = ({children, isOpen, closePopup}) => {
    return (
        <>
            <div className={`popup ${isOpen ? 'active' : ''}`} onClick={() => closePopup(false)} >
                <div className="popup-wrap" onClick={e => e.stopPropagation()}>
                    <span className="popup-wrap_close" onClick={() => closePopup(false)}>X</span>
                    {children}
                </div>
            </div>

        </>
    )
}

export default Popup;