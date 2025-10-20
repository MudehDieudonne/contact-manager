import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useContacts } from "../context/ContactContext"
import './ContactList.css'

const EditContact = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { contacts, editContact } = useContacts()
  const [form, setForm] = useState({ name: "", email: "", phone: "" })
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const c = contacts.find(ct => String(ct.id) === String(id))
    if (c) {
      setForm({ name: c.name || "", email: c.email || "", phone: c.phone || "" })
    } else {
      setNotFound(true)
    }
  }, [contacts, id])

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim()) {
      alert("Name is required")
      return
    }

    // editContact expects the full contact object with id
    editContact({ id, ...form })
    navigate("/")
  }

  if (notFound) {
    return (
      <div style={{ padding: 16 }}>
        <p>Contact not found.</p>
      </div>
    )
  }

  return (
    <div className="editContact" style={{ padding: 16 }}>
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 480 }}>
        <div style={{ marginBottom: 10 }}>
          <label>Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: 8, marginTop: 6 }}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            style={{ width: "100%", padding: 8, marginTop: 6 }}
          />
        </div>
        <div style={{ marginBottom: 14 }}>
          <label>Phone</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            style={{ width: "100%", padding: 8, marginTop: 6 }}
          />
        </div>
        <div>
          <button type="submit" className="btn btnEdit">Save</button>
          <button type="button" onClick={() => navigate(-1)} style={{ marginLeft: 8 }} className="btn">Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditContact