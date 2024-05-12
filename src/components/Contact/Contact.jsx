import css from './Contact.module.css'
import { MdPerson } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({contact: {name,number,id}, onDelete}) {

    return (
        <div className={css.card}>
            <ul className={css.list}>
                <li className={css.data}>
                    <MdPerson className="contact-icon" size="24"/> 
                    <span className={css.text}>{name}</span>
                </li>
                <li className={css.data}>
                    <FaPhoneAlt className="phone-icon" size="22"/> 
                    <span className={css.text}>{number}</span>
                </li>
            </ul>
            <button
                className={css.button}
                onClick={(() => onDelete(id))}>
                Delete
            </button>
        </div>
    )
}

 