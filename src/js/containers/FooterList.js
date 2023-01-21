const FooterList = ({img, listArray}) => {
    return (
        <>
            <ul className="footer-list">
                <img className="footer-list_pic" src={require(`../../images/footer/${img}`)} alt="logo"/>
                {listArray.map(item => <li key={item.id} className="footer-list_item">{item.title}</li>)}
            </ul>
        </>
    )
}

export default FooterList;