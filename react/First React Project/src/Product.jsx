function Product({title, price, features}) {
    const list = features.map((feature) => (<li>{feature}</li>));
    return(
    <>
        <div>
            <h2>{title}</h2>
            <p>{price}</p>
            <p>{list}</p>
        </div>
    </>
    )
}
export default Product;