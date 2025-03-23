import { useContacts } from "../context/ContactContext"
import { Link } from "react-router-dom"
import './ContactList.css'

const ContactList = () => {
    const { contacts, deleteContact } = useContacts()

    return (
        <div className='contactList'>
          {contacts.length === 0 ? <p>No contact found.</p> : null}
          {contacts.map((contact) => (
            <div key={contact.id} className='contactItem'>
              <div className='contactDetails'>
                <h3>{contact.name}</h3>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
              </div>
              <div className='contactActions'>
                <Link to={`/edit/${contact.id}`}>
                  <button style={{backgroundColor: "green", border: "none", color:"#fff"}}>Edit</button>
                </Link>
                <button onClick={() => deleteContact(contact.id)} style={{ backgroundColor: "red", border: "none", color:"#fff"}}>
                    Delete
                </button>
              </div>
            </div>
          ))}
        </div>
    )
}

export default ContactList