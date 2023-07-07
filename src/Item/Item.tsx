import Button from "@material-ui/core/Button";

// Types
import { CartItemType } from "../App"
import { Wrapper } from "./Item.styles"

type Props = {
    item: CartItemType;
    handleAddToCart : (clickedItem: CartItemType) => void;
}

export const Item: React.FC<Props> = ({item, handleAddToCart}) => (
    <Wrapper>
        <img src={item.image} alt={item.title}/>
        <div>
            <h5>{item.title}</h5>
            {/* <p>{item.description}</p> */}
            <h5>${item.price}</h5>
        </div>
        <Button onClick={() => handleAddToCart(item)}> Add To Cart </Button> 
    </Wrapper>
)