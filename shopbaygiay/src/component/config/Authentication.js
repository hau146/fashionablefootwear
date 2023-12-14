import {Navigate, Outlet} from "react-router-dom";
import * as AccountService from "../../service/AccountService";
const hasValueInAuthorProperty = (allowedRoles, currentRoles) => {
    for (let i = 0; i < allowedRoles.length; i++) {
        const valueToCheck = allowedRoles[i];
        for (let j = 0; j < currentRoles.length; j++) {
            const obj = currentRoles[j];
            if (obj.authority === valueToCheck) {
                return true;
            }
        }
    }
    return false;
}
const Authentication = ({ allowedRoles }) => {
    const infoUser = AccountService.infoAppUserByJwtToken();


    let roles;
    if (infoUser) {
        roles = infoUser.roleList;
    }

    return roles && hasValueInAuthorProperty(allowedRoles, roles) ? (
        <Outlet />
    ) : <Navigate to={`/login`} />
}
export default Authentication;