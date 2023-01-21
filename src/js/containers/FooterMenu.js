const FooterMenu = ({menuArray}) => {
    return (
        <>
            <ul className="footer-menu _list-none">
                {menuArray.map(item => <li className="footer-menu_item _pos-rel" key={item.id}><a href="/#">{item.title}</a></li>)}
            </ul>
        </>
    )
}

export default FooterMenu;