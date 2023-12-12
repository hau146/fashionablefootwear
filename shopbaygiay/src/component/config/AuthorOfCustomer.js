import {Navigate, Outlet} from "react-router-dom";
import * as AccountService from "../../service/AccountService";
const AuthorOfCustomer = ({ allowedRoles }) => {
    const roleAdmin = AccountService.checkRollAppUser("ROLE_MEMBER");

    const infoUser = AccountService.infoAppUserByJwtToken();


    let roles;
    if (infoUser) {
        roles = infoUser.roleList;
    }

    return roles && (roleAdmin)  ? (
        <Outlet />
    ) : <Navigate to={`/403`} />

}

export default AuthorOfCustomer;