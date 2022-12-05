import { PROFILE_DATA } from "../stateConstants";

export default function changeProfileData(profileData){
    return {
        type: PROFILE_DATA,
        profileData: profileData
    }
}