import "./modal.css"
import { useState } from "react"
const Modal = ({ image }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleModal = () => {
        setIsOpen(ps => {console.log(ps); return !ps})
    }

    return (
        <div>
            <img src={image.src} alt={image.name} className="modal-image" onClick={() => toggleModal()}></img>
        {isOpen && <dialog className="dialog" style={{position:"absolute"}} open onClick={()=>toggleModal()}>
            
            <img src={image.src} alt={image.name} className="image" ></img>
            </dialog>}
        </div>
    )
}

export default Modal
