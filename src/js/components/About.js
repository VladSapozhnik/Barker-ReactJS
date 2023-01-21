import Info from "../containers/Info";
import img1 from "../../images/about/1.jpg";
import img2 from "../../images/about/2.jpg";
import img3 from "../../images/about/3.jpg";

const About = () => {
    const infoTitle = 'Про нашу пекарню';

    const info = [
        {
            id: 1,
            title: 'Наша пекарня це мережа, яка завойовує серця любителів теплої оригінальної випічки.'
        },
        {
            id: 2,
            title: 'Ми готуємо кожен день, не залишаючи нічого на завтра. Все що ви бачите на прилавку - приготовленно вранці.'
        },
        {
            id: 3,
            title: 'Ми не економимо на продуктах і кадрах. Ми любимо своїх гостей. Ми знаємо що таке смачна випічка. Ми даруємо вас своє тепло кожен день.'
        }
    ]

    return (
        <>
            <div className="about ">
                <div className="container _f _j-end _pos-rel">
                   <Info className="info about-info" title={infoTitle} infoArray={info} />
                    <div className="about-pictures">
                        <img src={img1} className="about-pictures_img about-pictures_img--one" alt="img1" />
                        <img src={img2} className="about-pictures_img about-pictures_img--two" alt="img2" />
                        <img src={img3} className="about-pictures_img about-pictures_img--three" alt="img3" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;