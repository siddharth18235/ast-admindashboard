import { useState } from "react";
import DeleteIcon from "../Icons/Delete";
import sampleuser from "../assets/sampleuser.png";
import axios from "axios";

export default function User({ details,handleUserDelete }) {
    const [user,setUser] = useState(details)
    const handleUserStatusToggle = async (e) => {
        setUser({...user,subscribed:e.target.checked})
        const res = await axios.post('user/update',{
            userId:user._id,
            updatedData:{...user,subscribed:e.target.checked}
        });
    }

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img
          className="w-12 h-12 rounded-full"
          src={sampleuser}
          alt="User image"
        />
        <div className="ps-3">
          <div className="text-base font-semibold">{user.name}</div>
        </div>
      </th>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" checked={user.subscribed} onChange={handleUserStatusToggle} />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-green-800  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500 "></div>
          </label>
        </div>
      </td>
      <td className="px-6 py-4 grid grid-flow-col">
        <div className="grid cursor-pointer" onClick={() => {
            handleUserDelete(user._id)
        }}>
          <DeleteIcon />
        </div>
      </td>
    </tr>
  );
}
