import Popup from "../containers/Popup";
import {useState} from "react";
// import usePopup from "../hooks/usePopup";

const Contacts = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [textVal, setTextVal] = useState('');
    const [telVal, setTelVal] = useState('');

    const contactsInfo = [
        {
            id: 1,
            text: "Ми зателефонуємо вам для уточнення замовлення і ваших побажань."
        },
        {
            id: 2,
            text: "Разом з вами втілимо будь-які ваші задумки у випічці. Ви порадуєте себе або своїх гостей, а ми будемо щасливі розділити з вами дану мить."
        },
        {
            id: 3,
            text: "Доставка проводиться через самовивіз, Glovo та Raketa."
        }
    ]
    const handlerForm = (e) => {
        e.preventDefault();
        setTextVal(e.target[0].value);
        setTelVal(e.target[1].value)
        setIsOpen(true);
    }

    return (
        <>
            <div className="contacts">
                <div className="container">
                    <h2 className="h2 contacts_title">Замовляй прямо зараз!</h2>
                    {contactsInfo.map(item => <p className="contacts_text _text-c" key={item.id}>{item.text}</p>)}
                    <form className="contacts-form _f _j-between" onSubmit={handlerForm}>
                        <label className="contacts-form_field">
                            <input type="text" required="required" />
                            <span>Ваше ім’я*</span>
                        </label>
                        <label className="contacts-form_field">
                            <input type="tel" required="required" />
                            <span>Номер телефону*</span>
                        </label>
                        <button type="submit" className="contacts-form_btn">Надіслати</button>
                    </form>
                    <Popup closePopup={setIsOpen} isOpen={isOpen}>
                        <h2 className="popup-wrap_title _text-c">Успіх</h2>
                        <p className="popup-wrap_info _text-c">{textVal}, дякуємо за заявку. Ми вам передзвонимо на номер: {telVal}</p>
                    </Popup>
                </div>
            </div>
        </>
    )
}

export default Contacts;