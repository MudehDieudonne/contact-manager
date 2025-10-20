import { useContacts } from "../context/ContactContext"
import { Link } from "react-router-dom"
import './ContactList.css'

const ContactList = () => {
    const { contacts, deleteContact } = useContacts()

    return (
        <div className='contactList'>
          <div className="contactHeader">
            <Link to="/add" className="addLink" aria-label="Add contact">
              <div className="addButton" title="Add contact">+</div>
              <div className="addLabel">Add Contact</div>
            </Link>
          </div>

          {contacts.length === 0 ? <p className="noContacts">.</p> : (
            <div className="tableWrapper">
              <table className='contactsTable'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th className="actionsCol">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact.id} className='contactRow'>
                      <td>{contact.name}</td>
                      <td>{contact.email}</td>
                      <td>{contact.phone}</td>
                      <td className="actionsCol">
                        <Link to={`/edit/${contact.id}`}>
                          <button className="btn btnEdit">Edit</button>
                        </Link>
                        <button
                          onClick={() => deleteContact(contact.id)}
                          className="btn btnDelete"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
    )
}

export default ContactList