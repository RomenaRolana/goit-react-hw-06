import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  if (!Array.isArray(contacts) || contacts.length === 0) {
    return <p>No contacts available.</p>;
  }

  return (
    <ul className={css.listContact}>
      {contacts.map((contact) => (
        <Contact key={contact.id} {...contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
