import companyImg from '../../images/company/company.jpg'
import Info from "../containers/Info";

const Company = () => {
    const companyArray = [
        {
            id: 1,
            title: "У нашій пекарні працюються найкращі пекарі України, які люблять свою справу та до випікання випічки підходять з творчим підходом."
        },
        {
            id: 2,
            title: "Щодня наші бейкери прокидаються о 5 годині ранку, щоб на сніданок ви завжди снідали свіжою та запашною випічкою."
        }
    ]

    const essentialArray = [
        {
            id: 1,
            title: "Пекарі, кондитери та кур’єри.",
        },
        {
            id: 2,
            title: "Надсилайте резюме і отримайте роботу вашої мрії!"
        }
    ]

    return (
        <>
            <div className="company">
                <div className="container _f _pos-rel">
                    <div className="company-box">
                        <img className="company-box_pic" src={companyImg} alt="company" />
                    </div>
                    <Info className="info company-info" title="Робота в компанії" infoArray={companyArray} essentialTitle={"Завжди потрібні:"} essentialArray={essentialArray} />
                </div>
            </div>
        </>
    )
}

export default Company;