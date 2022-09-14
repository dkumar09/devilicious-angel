import React, { useState } from 'react'
import data from '../back/data/Data'
import { ItemContext } from './ItemContext'
const ItemContextWrapper= (props) => {
    const [items, setItems] = useState(data.productItems)
    const changeItems = (it)=>{
        setItems(it)
    }
  return (
      <ItemContext.Provider value={{productItems: items, changeItems:changeItems}}>
        {props.children}
      </ItemContext.Provider>
  )
}

export default ItemContextWrapper
