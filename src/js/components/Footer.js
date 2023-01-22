import Maps from "../containers/Maps";
import Logo from "../containers/Logo";
import FooterList from "../containers/FooterList";
import FooterMenu from "../containers/FooterMenu";

const Footer = () => {
    const location = {
        icon: "map-pin.svg",
        infoArray: [
            {
                id: 1,
                title: "м. Вінниця"
            }
        ]
    }

    const workingDays = {
        icon: "calendar_pic.svg",
        infoArray: [
            {
                id: 1,
                title: "Пн - Пт. 09:00 - 21:00"
            },
            {
                id: 2,
                title: "Сб - Нд. 10:00 - 22:00"
            }
        ]
    }

    const phones = {
        icon: "phone_pic.svg",
        infoArray: [
            {
                id: 1,
                title: "(099) 999-99-99"
            },
            {
                id: 2,
                title: "(096) 999-99-99"
            }
        ]
    }

    return (
        <>
            <div className="footer _f">
                <Maps/>
                <div className="footer-content">
                    <Logo className="footer_pic" />
                    <div className="footer-wrapper _f _f-wrap">
                        <FooterMenu />
                        <div className="_f-column">
                            <FooterList img={location.icon} listArray={location.infoArray} />
                            <FooterList img={workingDays.icon} listArray={workingDays.infoArray} />
                            <FooterList img={phones.icon} listArray={phones.infoArray} />
                        </div>
                    </div>
                    <p className="footer-content_copy">&#169; Працюємо з 2021 року</p>
                </div>
            </div>
        </>
    )
}
export default Footer;