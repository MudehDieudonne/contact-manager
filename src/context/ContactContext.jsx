import { createContext, useContext, useState } from "react"
import { v4 as uuidv4 } from "uuid"

const ContactContext = createContext()

export const useContacts = () => useContext(ContactContext)

export const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState([])

    //Function to add Contacts
    const addContact = (contact) => {
        setContacts([...contacts, {id: uuidv4(), ...contact}])
    }

    //Edit Contact
    const editContact = (updatedContact) => {
        setContacts(
            contacts.map((contact) => contact.id === updatedContact.id ? updatedContact : contact)
        )
    }

    // Delete Function
    const deleteContact = (id) => {
        setContacts(contacts.filter((contact) => contact.id !== id))
    }

    return (
        <ContactContext.Provider value={{contacts, addContact, editContact, deleteContact}}>
            {children}
        </ContactContext.Provider>
    )
}