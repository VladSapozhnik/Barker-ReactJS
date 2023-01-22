const AssortmentProduct = ({title, price, src, btn}) => {

    return (
        <div className="assortment-product _f _f-column _i-center">
            <img className="assortment-product_pic _img" src={require("../../images/assortment/" + src)} alt={title}/>
            <h4 className="h4 assortment-product_title _text-c"
                style={{fontSize: `${(20 - title.length / 20)}px`}}>{title}</h4>
            <p className="assortment-product_price _text-c">{price}</p>
            <div className="btn assortment-product_btn">{btn}</div>
        </div>
    )
}

export default AssortmentProduct;