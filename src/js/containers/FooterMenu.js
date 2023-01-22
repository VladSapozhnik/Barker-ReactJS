import {useSelector} from "react-redux";
import {navigateArray} from "../store/navigate";

const FooterMenu = () => {
    const menuArray = useSelector(navigateArray);

    return (
        <>
            <ul className="footer-menu _list-none">
                {menuArray.map(item => <li className="footer-menu_item _pos-rel" key={item.id}><a href="/#">{item.title}</a></li>)}
            </ul>
        </>
    )
}

export default FooterMenu;