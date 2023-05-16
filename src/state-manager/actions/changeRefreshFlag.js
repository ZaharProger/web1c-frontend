import { REFRESH_FLAG } from "../stateConstants";

export default function changeRefreshFlag(refreshFlag){
    return {
        type: REFRESH_FLAG,
        refreshFlag: refreshFlag
    }
}