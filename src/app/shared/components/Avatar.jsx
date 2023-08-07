import {useRecoilValue} from "recoil";
import {currentUserNameState} from "../../core/store";


export function Avatar() {
    const user = useRecoilValue(currentUserNameState)
    return (
        <div className="bg-gray-400 h-12 w-12 rounded-full">
            <img src={user.image} alt={user.username} />
        </div>
    )
}