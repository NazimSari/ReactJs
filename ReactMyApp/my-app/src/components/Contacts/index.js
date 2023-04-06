import { useState, useEffect } from "react";
import "./styles.css";
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Nazım",
      phone_number: "123123",
    },
    {
      fullname: "Mehmet",
      phone_number: "454555",
    },
    {
      fullname: "Ayşe",
      phone_number: "898989",
    },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
