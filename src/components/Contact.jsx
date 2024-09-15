import { FaPhone, FaUser } from "react-icons/fa";
import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";

import { deleteContact } from "../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <li className={styles.item}>
        <div>
          <p>
            <FaUser style={{ marginRight: "10px", color: "white" }} />
            {name}
          </p>

          <p>
            <FaPhone style={{ marginRight: "10px", color: "white" }} />
            {number}
          </p>
        </div>
        <button
          className={styles.button}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </li>
    </div>
  );
};

export default Contact;
