import { createContext} from "react";
    
import data from "../back/data/Data";
const changeItems = ()=>{}
export const ItemContext =  createContext({productItems:data.productItems, changeItems})