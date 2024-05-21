import { IoIosContact } from "react-icons/io";
import { LiaUserEditSolid } from "react-icons/lia";
import { TiDelete } from "react-icons/ti";
import { db } from "../config/firebase"
import { deleteDoc, doc } from "firebase/firestore";
import AddNew from "./AddNew";
import useCoustom from "../hooks/useCoustom";

const ContactCard = ({ contact }) => {
  const deleteCon = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
    } catch (error) {
      console.log(error);
    }
  };

  const {onOpen, onClose ,isOpen} =useCoustom();

  return (
    <>
    <div
      key={contact.id}
      className="flex space-x-3 items-center m-3 bg-amber-100 p-1 rounded-md justify-between"
    >
      <div className="flex gap-2 items-center">
        <IoIosContact className=" text-blue-500 text-3xl m-1" />
        <div>
          <h2 className=" text-black text-lg">{contact.name}</h2>
          <p className=" text-blue-950">{contact.email}</p>
        </div>
      </div>

      <div className="flex">
        <LiaUserEditSolid 
         onClick={onOpen} className="text-3xl cursor-pointer" />
        <TiDelete
          onClick={() => deleteCon(contact.id)}
          className="text-red-300 text-3xl cursor-pointer"
        />
      </div>
    </div>
    <AddNew
    contact = {contact}
    isUpdate
    isOpen = {isOpen}
    onClose = {onClose}
    />
    </>
  );
};

export default ContactCard;
