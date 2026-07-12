import Product from "./Product"

export default function ProductTab(){
    let styles = { display: "flex", flexWrap: "wrap", justifyContent: "center", alignItem: "center"};
    return(
        <div style={styles}>
        <Product title="Dell Mouse" idx={0}/>
        <Product title="HP Laptop 15" idx={1}/>
        <Product title="Samsung S22" idx={2}/>
        <Product title="Iphone 17" idx={3}/>
        </div>
    )
}