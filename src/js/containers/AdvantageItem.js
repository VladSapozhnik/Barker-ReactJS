const AdvantageItem = ({title, description, src}) => {
    return (
        <>`
            <div className="advantage-item _] _f-column _i-center">
                <img className="advantage-item_pic _img" src={require("../../images/advantage/" + src)} alt={title}/>
                <h4 className="advantage-item_title">{title}</h4>
                <p className="advantage-item_description _text-c">{description}</p>
            </div>
        </>
    )
}

export default AdvantageItem;