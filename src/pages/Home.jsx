import { Link } from "react-router-dom"
import ContactList from "../Components/ContactList"
import  './Home.css'

function Home() {
    return (
      <div className='homeContainer'>
        <h1>Contact Manager</h1>
        <ContactList />
      </div>
    )
}

export default Home