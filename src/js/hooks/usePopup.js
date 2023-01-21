import {useEffect, useState} from "react";

export default function usePopup(isOpen) {
    // e.preventDefault();
    const [nameValue, setNameValue] = useState(isOpen);
    useEffect(() => {
        setNameValue(prev => !prev)
    }, [isOpen])
    console.log(nameValue)
    // console.log(e.target[0].value)
    // setNameValue(e.target[0].value);
    // const [tel, setTel] = useState('');
    // const handlerForm = (e) => {
    //     e.preventDefault();
    //     console.log(e)
    // }

    // setName(e.target[0].value);
    // setTel(e.target[1].value);

    // setIsOpen(true);
    return nameValue

}