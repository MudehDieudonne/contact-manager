import { createContext, useContext, useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"

const ContactContext = createContext()

export const useContacts = () => useContext(ContactContext)

export const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState(() => {
        try {
            const raw = localStorage.getItem("contacts")
            return raw ? JSON.parse(raw) : []
        } catch {
            return []
        }
    })

    // persist contacts to localStorage
    useEffect(() => {
        try {
            localStorage.setItem("contacts", JSON.stringify(contacts))
        } catch {
            // come back later
        }
    }, [contacts])

    // add Contacts
    const addContact = (contact) => {
        setContacts((prevContacts) => [...prevContacts, { id: uuidv4(), ...contact }])
    }

    // Edit Contact
    const editContact = (updatedContact) => {
        setContacts((prev) =>
            prev.map((contact) => (contact.id === updatedContact.id ? updatedContact : contact))
        )
    }

    // Delete Function (usx functional update)
    const deleteContact = (id) => {
        setContacts((prev) => prev.filter((contact) => contact.id !== id))
    }

    return (
        <ContactContext.Provider value={{ contacts, addContact, editContact, deleteContact }}>
            {children}
        </ContactContext.Provider>
    )
}