import {ArrowDownIcon} from "@heroicons/react/20/solid";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import {currentUserIdState} from "../../core/store";


export function LogoutButton ()  {
    let [userId, setUserId] =  useRecoilState(currentUserIdState);
    const navigate = useNavigate();
    const handleLogout = async () => {
      await axios.get(
          "http://localhost:5000/api/user/logout"
      ).then(
          function (response) {
              setUserId("");
              console.log(userId)
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