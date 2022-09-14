import { useContext } from "react"
import { ItemContext } from "../../utils/ItemContext"
import ItemContextWrapper from "../../utils/ItemContextWrapper"
import "./sidebar.scss"
const Sidebar = () => {
  const { productItems, changeItems } = useContext(ItemContext)
  console.log(productItems);
  function lowToHigh() {
    let items = productItems.sort((a, b) => {
      if (a.price < b.price) return -1;
      if (a.price > b.price) return 1;
      return 0;
    })
    changeItems(items)
  };
  function highToLow() { };
  return (
      <div className="sidebar">
        <ul className="filters">
          <li className="filter">
            <button className="btn" onClick={() => lowToHigh()}>Low to High</button>
          </li>
          <li className="filter" onClick={() => highToLow()}>
            <button className="btn">High to Low</button>
          </li>
          {/* <li className="filter">
          <button>Range</button>
        </li> */}
        </ul>
      </div>
  )
}
export default Sidebar
