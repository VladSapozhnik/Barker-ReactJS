import {useSelector} from "react-redux";
import {navigateArray} from "../store/navigate";
const MenuMobile = ({isOpen}) => {
    const menuArray = useSelector(navigateArray);

    return (
        <>
            <div className={`mobile-menu ${isOpen === true ? "active" : ""}`}>
                <ul className="mobile-menu_list mobile-list _f _f-column _i-center">
                    {menuArray.map(item => <li className="mobile-list_item" key={item.id}><a className="mobile-list_link" href="/#">{item.title}</a></li>)}
                </ul>
            </div>
        </>
    )
}

export default MenuMobile;