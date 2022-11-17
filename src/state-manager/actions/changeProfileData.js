import { PROFILE_DATA } from "../stateConstants";

export default function changeProfileData(profileData){
    return {
        type: PROFILE_DATA,
        profile_data: profileData
    }
}