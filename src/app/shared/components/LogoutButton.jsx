import {ArrowDownIcon} from "@heroicons/react/20/solid";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export function LogoutButton ()  {
    const navigate = useNavigate();
    const handleLogout = () => {
      axios.get(
          "http://localhost:5000/api/user/logout"
      ).then(
          function (response) {
              console.log(response)
              navigate("/")
          }
      )
    }

    return(
        <button className="px-10 flex justify-between" onClick={handleLogout}>
            <span className='dark:text-gray-50'>
                Logout
            </span>
            <ArrowDownIcon className="h-8 w-8 text-gray-300" />
        </button>
    )
}