import { useProduct } from "../context/ProductsContext"

export default function Cart() {
    const {state, dispatch} = useProduct();

    return (
    <div>
        <h2>Products in your cart</h2>
        <ul>
        {state.cart.map((item) => (
          <li key={item.id}>
            <div>
              <img src={item.img} width="200px" height="200px"></img>
            </div>
            <div>
              {item.title}
            </div>
            <div>
              <button onClick={() => dispatch({type:"RemoveFromCart", id:item.id})}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    )
}