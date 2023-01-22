import {useState, useEffect} from "react";
import MenuMobile from "../containers/MenuMobile";
import Logo from '../containers/Logo';
import {useDispatch, useSelector} from "react-redux";
import {fetchNavigate, navigateArray} from "../store/navigate";

const Header = () => {
    const [scroll, setScroll] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();
    const menuArray = useSelector(navigateArray);

    window.addEventListener('scroll', () => {
        setScroll(window.scrollY);
    })

    useEffect(() => {
        dispatch(fetchNavigate());
    }, [dispatch])

    return (
        <header className={`header ${(scroll > 112 ? 'active' : '')} _pos-fix _pos-top _pos-left _wid-100` }>
            <div className="container _f _i-center _j-between">
                <Logo className="header_pic" />
                <a className="header_tel _fz-34 _line-h-125" href="tel:+380999999999">(099) 999-99-99</a>
                <nav className="nav _f">
                    <ul className="nav-list _f">
                        {menuArray.map(item => <li key={item.id} className="nav-list_item"><a className="nav-list_link" href={item.href}>{item.title}</a></li>)}
                    </ul>
                </nav>
                <button className="btn header_btn">Асортимент</button>
                <div className={`openMenu ${isOpen === true ? "active" : ""}`} onClick={() => setIsOpen(prev => !prev)}>
                    <span></span>
                </div>

            </div>
            <MenuMobile isOpen={isOpen} />
        </header>
    )
}

export default Header