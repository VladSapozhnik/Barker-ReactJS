import AdvantageItem from "../containers/AdvantageItem";

const Advantage = () => {
    const advantageArray = [
        {
            id: 1,
            title: "Професіонали",
            description: "Ми за якісні кадри и поважаемо працю наших працівників. Вони стараються над вашою випічкою. А ми стараємся спростити їм цю задачу.",
            src: "1.jpg"
        },
        {
            id: 2,
            title: "Якість",
            description: "Це найважливіше в нашій роботі. Тільки з якісних продуктів можуть вийти такі шедеври, якими ми полюбляємо частувати вас.",
            src: "2.jpg"
        },
        {
            id: 3,
            title: "Навчання",
            description: "Наші робітники постійно навчаються і розвиваються. Що дозволяє нам дивувати вас новинках кожен місяць.",
            src: "3.jpg"
        }
    ]

    return (
        <>
            <div className="advantage">
                <div className="container">
                    <h2 className="h2 advantage_title">Чому наша мережа?</h2>
                    <div className="advantage-wrap _f _j-center _f-wrap">
                        {advantageArray.map(item => <AdvantageItem key={item.id} title={item.title} description={item.description} src={item.src} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Advantage;