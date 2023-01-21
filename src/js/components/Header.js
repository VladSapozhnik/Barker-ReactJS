import {useState} from "react";
import MenuMobile from "../containers/MenuMobile";
import Logo from '../containers/Logo';

const Header = () => {
    const [scroll, setScroll] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    window.addEventListener('scroll', () => {
        setScroll(window.scrollY);
    })

    const navList = [
        {
            id: 1,
            title: 'Про компанію',
            href: '/#'
        },
        {
            id: 2,
            title: 'Чому ми?',
            href: '/#'
        },
        {
            id: 3,
            title: 'Робота в компанії',
            href: '/#'
        },
        {
            id: 4,
            title: 'Контакти',
            href: '/#'
        },
    ]

    return (
        <header className={`header ${(scroll > 112 ? 'active' : '')} _pos-fix _pos-top _pos-left _wid-100` }>
            <div className="container _f _i-center _j-between">
                {/*<img className="header_pic object-fit _c-pointer" src={logo} alt="logo"/>*/}
                <Logo className="header_pic" />
                <a className="header_tel _fz-34 _line-h-125" href="tel:+380999999999">(099) 999-99-99</a>
                <nav className="nav _f">
                    <ul className="nav-list _f">
                        {navList.map(item => <li key={item.id} className="nav-list_item"><a className="nav-list_link" href={item.href}>{item.title}</a></li>)}
                    </ul>
                </nav>
                <button className="btn header_btn">Асортимент</button>
                <div className={`openMenu ${isOpen === true ? "active" : ""}`} onClick={() => setIsOpen(prev => !prev)}>
                    <span></span>
                </div>

            </div>
            <MenuMobile navMenu={navList} isOpen={isOpen} />
        </header>
    )
}

export default Header