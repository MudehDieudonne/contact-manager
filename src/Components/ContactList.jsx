import { useContacts } from "../context/ContactContext"
import { Link } from "react-router-dom"

const ContactList = () => {
    const { contacts, deleteContact } = useContacts()

    return (
        <div className={styles.ContactList}>
          {contacts.length === 0 ? <p>No contact found.</p> : null}
          {contacts.map((contact) => {
            <div key={contact.id} className={styles.contactItem}>
              <div className={styles.contactDetails}>
                <h3>{contact.name}</h3>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
              </div>
              <div className={styles.contactActions}>
                <Link to={`/edit/${contact.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => deleteContact(contact.id)} style={{ backgroundColor: "red" }}>
                    Delete
                </button>
              </div>
            </div>
          })}
        </div>
    )
}

export default ContactList