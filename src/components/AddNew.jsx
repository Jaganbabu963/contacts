import React from 'react'
import Modal from './Modal'
import {Formik , Form, Field, ErrorMessage} from "formik"
import { db } from "../config/firebase"
import { collection, addDoc ,doc,updateDoc} from "firebase/firestore"
import * as Yup from "yup"

const AddNew = ({isOpen,onClose,isUpdate,contact}) => {
     const addContact = async (contact)=>{
         try {
          const contactRef = collection(db, "contacts");
          await addDoc(contactRef,contact);
          onClose();
         } catch (error) {
          console.log(error);
         }
     }

     const updateContact = async (contact, id)=>{
          try {
           const contactRef = doc(db, "contacts",id);
           await updateDoc(contactRef,contact);
           onClose();
          } catch (error) {
           console.log(error);
          }
      }

      const conValid = Yup.object().shape(
         {  
          name:Yup.string().required("Name is mandatory"),
          email:Yup.string().email("invalid email").required("email is mandatory")
         }
      )

  return (
      <Modal  isOpen={isOpen} onClose={onClose}> 
      <Formik
        validationSchema={conValid}
        initialValues = {
          isUpdate?{
               name:contact.name,
               email:contact.email,
          }:
          {
               name:"",
               email:"",
          }
        }
        onSubmit = {(values)=>
        isUpdate?updateContact(values,contact.id):
        addContact(values)}
      >
          <Form>
              <div className='flex flex-col gap-2'>
              <div className='flex flex-col gap-1'>
               <label htmlFor='name' className='text-xl font-medium'>Name</label>
               <Field name="name" className="h-10 border" />
               <div className='text-md text-red-500'><ErrorMessage name="name"/></div>
               </div>
               <div className='flex flex-col gap-1'>
               <label htmlFor='email' className='text-xl font-medium'>Emali</label>
               <Field type="email" name="email" className="h-10 border" />
               <div className='text-md text-red-500'><ErrorMessage name="email"/></div>
               </div>
               <button type='submit' className=' bg-green-400 p-2 rounded-lg self-end'>{( isUpdate )? "Update":"Add"}</button>
              </div>
          </Form>
      </Formik> 
      
      </Modal>
  
  )
}

export default AddNew

