import { useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
// import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { setFilter } from "./redux/filtersSlice";
import { addContact, deleteContact } from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => {
    return state.contacts.items;
  });

  const filter = useSelector((state) => {
    return state.filters.name;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = (newContact) => {
    const newUserContact = {
      ...newContact,
      id: nanoid(),
    };

    const action = addContact(newUserContact);
    dispatch(action);
  };

  const deleteChooseContact = (contactId) => {
    const action = deleteContact(contactId);
    dispatch(action);
  };
  const onChangeFilter = (event) => {
    const action = setFilter(event.target.value);
    dispatch(action);
  };
  

  const visibleContact = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addNewContact} />
      <h2>Search contact</h2>
      <input
        type='text'
        placeholder='Search...'
        value={filter}
        onChange={onChangeFilter}
      />
      <ContactList contacts={visibleContact} onDelete={deleteChooseContact} />
    </div>
  );
}

export default App;
