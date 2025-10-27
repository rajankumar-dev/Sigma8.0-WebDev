import Price from "./Price"
function Product({title, idx}){
    let oldPrice = ["12,000", "11,499", "1599", "599"];
    let newPrice = ["8,999", "5000", "1399", "399"];
    return(
        <>
        <div className="Product">
            <h4>{title}</h4>
            <p>Description</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
        </>
    )
}
export default Product;