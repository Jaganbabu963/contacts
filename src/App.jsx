import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Search from "./components/Search"
import { collection, getDocs, onSnapshot } from "firebase/firestore"
import { db } from "./config/firebase"
import ContactCard from "./components/ContactCard"
import useCoustom from "./hooks/useCoustom"

import AddNew from "./components/AddNew"
import NoContacts from "./components/NoContacts"

const App = () => {

  const [contacts,setContacts]=useState([]);

  useEffect(()=>{

    const getContacts = async ()=>{
      try {
       const contactsRef = collection(db, "contacts");
       onSnapshot(contactsRef, (snapshot)=>{
        const contactLists = snapshot.docs.map((doc) => {
          return{ 
          id:doc.id,
          ...doc.data()}
         }
          );
          setContacts(contactLists);
          return contactLists;
       }) 
      } catch (error) {
        console.log(error);
      }
    }
    getContacts();
  },[])

   function filterCons(e) {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
    onSnapshot(contactsRef, (snapshot)=>{
     const contactLists = snapshot.docs.map((doc) => {
       return{ 
       id:doc.id,
       ...doc.data()}
      }
       );

       const filteredContacts = contactLists.filter((contact)=>
       contact.name.toLowerCase().includes(value.toLowerCase()));

       setContacts(filteredContacts);
       return filteredContacts;
    })
 }


  const {onOpen, onClose ,isOpen} =useCoustom();

  return (
    <>
    <div className=" mx-auto max-w-[400px]">
     <Navbar />
     <Search 
     onOpen={onOpen}
     filterCons={filterCons}
     />
     <div> 
       {contacts.length <=0 ? <NoContacts /> :contacts.map((contact)=>{
        return( <ContactCard 
          key={contact.id} 
          contact = {contact}
          />)
        })}
     </div>
    </div>
    <AddNew
    isOpen = {isOpen}
    onClose = {onClose}
    />
    </>
  )
}

export default App
