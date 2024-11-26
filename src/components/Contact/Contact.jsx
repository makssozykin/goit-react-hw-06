import { IoIosContact } from 'react-icons/io';
import { FcPhoneAndroid } from 'react-icons/fc';
import css from './Contact.module.css';

export const Contact = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <>
      <div className={css.contactbox}>
        <p>
          <IoIosContact />
          {name}
        </p>
        <p>
          <FcPhoneAndroid />
          {number}
        </p>
      </div>
      <button
        className={css['delete-btn']}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </>
  );
};
