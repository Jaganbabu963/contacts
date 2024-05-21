import { PiAddressBookFill } from "react-icons/pi";

const NoContacts = () => {
  return (
    <div className="flex gap-2 m-4 items-center ">
     <PiAddressBookFill className='text-3xl text-white' />
      <h3 className='text-3xl text-white'>No Contact Found</h3>
    </div>
  )
}

export default NoContacts
