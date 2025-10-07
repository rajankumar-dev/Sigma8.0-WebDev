import Product from "./Product";
function ProductTab(){
    let features = ["High-tech","fast"];
    return(
        <>
        <Product title="Phone" price="50000" features={features}/>
        <Product title="Laptop" price="90000" features={features}/>
        <Product title="Pen" price="50" features={features}/>
        </>
    )
}
export default ProductTab;