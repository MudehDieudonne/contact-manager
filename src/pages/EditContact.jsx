import { useContacts } from "../context/ContactContext"
import ContactForm from "../Components/ContactForm"
import { useParams, useNavigate} from 'react-router-dom'
import './EditContact.css'

const EditContact = () => {
    const { id } = useParams()
    const {contacts, editContact} = useContacts()
    const navigate = useNavigate()

    const contact = contact.find((c) => c.id === id)

    console.log("Contacts: ", contacts);
    console.log("Editing ID: ", id);

    if(!contact) return <p>Contact not Found</p>

    return (
        <div className="editContainer">
            <h2>EditCOntact</h2>
            <ContactForm
                intialValue = {contact}
                onSubmit={(value) => {
                    editContact({...value, id})
                    navigate('/')
                }}
            />
        </div>
    )
}

export default EditContact