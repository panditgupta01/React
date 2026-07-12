import "./Product.css";
import Price from "./Price"
export default function Product({title, idx}) {
    let oldPrice= [1500, 50000, 100000, 120000];
    let newPrice= [1200, 49000, 90000, 100000];
    let description = [["Faster Responce", "Budget price"], ["Oled Dispaly", "i9 Gen"], ["Snapderagon 9", "Privacy on Display"], ["50 MP Camera", "Action key"]];
    return(
        <div className="Product">
        <h4>{title}</h4>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <Price oldPrice={oldPrice[idx]} newPrice = {newPrice[idx]}/>
        </div>
    )
}