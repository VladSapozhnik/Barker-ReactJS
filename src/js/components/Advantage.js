import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import AdvantageItem from "../containers/AdvantageItem";
import {advantage, fetchAdvantage} from "../store/advantage";

const Advantage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAdvantage());
    }, [dispatch])

    const advantageArray = useSelector(advantage);

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