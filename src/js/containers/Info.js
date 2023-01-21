const Info = ({className, title, infoArray, essentialTitle, essentialArray}) => {

    return (
        <div className={className}>
            <h2 className="h2 info_title">{title}</h2>
            {infoArray.map(item => <p className="info_description" key={item.id}>{item.title}</p>)}
            {/*{essentialTitle.length ? <h4 className="info-essential">{essentialTitle}</h4> : null}*/}
            {essentialTitle ?
                <div className="info_essential essential">
                    <h4 className="essential_title">{essentialTitle}</h4>
                    <ul className="essential-list _list-none">
                        {essentialArray.map(item => <li key={item.id} className="essential-list_item">{item.title}</li>)}
                    </ul>
                    <div className="essential_btn btn">
                        Надіслати резюме
                    </div>
                </div>
                : null}
        </div>
    )
}

export default Info;