import { FaSearch } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";

const Search = (props) => {

  const val = 5;
       
  return (
    <div className="flex mx-5 my-0 relative items-center">
      <FaSearch  className=" absolute text-xl ml-2 text-yellow-100"/>
      <input onChange={props.filterCons} type="text" placeholder="Search contact" className="bg-[#323334] border border-white rounded-xl px-8 h-8 text-white text-lg flex-grow"/>
      <IoAddCircle  onClick = {()=>{props.onOpen(val)}} className="text-4xl ml-1 text-white cursor-pointer"/>
    </div>
  )
}

export default Search
