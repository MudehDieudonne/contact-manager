import { useContacts } from "../context/ContactContext"
import ContactForm from "../Components/ContactForm"
import { useNavigate } from "react-router-dom"
import './AddContact.css'

function AddContact() {
    const navigate = useNavigate()
    const { contacts, addContact } = useContacts()


    const addingContacts = (values) => {
      if(contacts.some((contact) => contact.phone === values.phone)){
        return
      }
      addContact(values)
      navigate('/')
    }

    return (
      <div className="addContainer">
        <h2>Add Contact</h2>
        <ContactForm
          initialValues={{ name: '', email: '', phone: ''}}
          onSubmit={addingContacts}
        />
        <button style={{border: "none", background: "#00A97F", padding: "1em", borderRadius: "10px", width: "120px" ,color: "#fff"}} className="backButton" onClick={() => navigate('/')}>Back</button>
      </div>
    )
}

export default AddContact