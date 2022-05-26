import { useProduct } from "../context/ProductsContext";
import styles from "../styles/favs.module.css";

export default function Favs() {
  const {state, dispatch} = useProduct();

  return (
    <div className={styles.favs}>
      <h2>Favourites</h2>
      <ul>
        {state.favs.map((item) => (
          <li className={styles.product} key={item.title}>
            <div>
              <img src={item.img} width="200px" height="200px"></img>
            </div>
            <div>
              {item.title}
            </div>
            <div>
              <button onClick={() => dispatch({type:"RemoveFromFavs", id:item.id})} >Remove</button>
            </div>
          </li>
        ))}

      </ul>
    </div>
  );
}
