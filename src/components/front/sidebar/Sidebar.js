import "./sidebar.scss"

const Sidebar = () => {
  function lowToHigh(){};
  function highToLow(){};
  return (
    <div className="sidebar">
      <ul className="filters">
        <li className="filter">
          <button onClick={()=>lowToHigh()}>Low to High</button>
        </li>
        <li className="filter" onClick={()=>highToLow()}>
          <button>High to Low</button>
        </li>
        {/* <li className="filter">
          <button>Range</button>
        </li> */}
      </ul>
    </div>
  )
}
export default Sidebar
