import React from "react";
import "./topbar.css";
import { Settings } from "@material-ui/icons";
import mainLogo from "./servicecatalog.png";
import { useContext } from "react";
import { useState } from 'react';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import { loginRequest } from '../../authConfig';
import { AccountPicker } from '../Accounts/accountPicker';
import { clearStorage } from '../../utils/storageUtils';

export default function Topbar() {

  const [showProfilePicker, setShowProfilePicker] = useState(false);
    const { instance } = useMsal();

    let activeAccount;

    if (instance) {
        activeAccount = instance.getActiveAccount();
    }

    const handleLoginRedirect = () => {
        /**
         * When using popup and silent APIs, we recommend setting the redirectUri to a blank page or a page 
         * that does not implement MSAL. Keep in mind that all redirect routes must be registered with the application
         * For more information, please follow this link: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/login-user.md#redirecturi-considerations 
         */

        instance.loginRedirect(loginRequest)
            .catch((error) => console.log(error));
    };

    const handleLoginPopup = () => {
        instance.loginPopup({
            ...loginRequest,
            //redirectUri: '/redirect'
        }).catch((error) => console.log(error));
    };

    const handleLogoutRedirect = () => {
        let account = instance.getActiveAccount();
        clearStorage(account);

        instance.logoutRedirect({
            account: instance.getActiveAccount(),
        });
    };

    const handleLogoutPopup = () => {
        let account = instance.getActiveAccount();
        clearStorage(account);

        instance.logoutPopup({
            mainWindowRedirectUri: '/', // redirects the top level app after logout
            account: instance.getActiveAccount(),
        });
    };

    const handleSwitchAccount = () => {
        setShowProfilePicker(!showProfilePicker);
  };


  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div>
          <img className="topleft" src={mainLogo}></img>
        </div>
        <div className="topRight">
        <div className="item">
            <AuthenticatedTemplate>
            <DropdownButton
                            variant="warning"
                            drop="start"
                            title={activeAccount ? activeAccount.name : 'Unknown'}
                        >
                            <Dropdown.Item as="button" onClick={handleSwitchAccount}>
                                Switch account
                            </Dropdown.Item>
                            <Dropdown.Item as="button" onClick={handleLogoutPopup}>
                                Sign out using Popup
                            </Dropdown.Item>
                            <Dropdown.Item as="button" onClick={handleLogoutRedirect}>
                                Sign out using Redirect
                            </Dropdown.Item>
                        </DropdownButton>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                        <DropdownButton variant="secondary" className="ml-auto" drop="start" title="Sign In">
                            <Dropdown.Item as="button" onClick={handleLoginPopup}>
                                Sign in using Popup
                            </Dropdown.Item>
                            <Dropdown.Item as="button" onClick={handleLoginRedirect}>
                                Sign in using Redirect
                            </Dropdown.Item>
                        </DropdownButton>
                </UnauthenticatedTemplate>
          </div>
          <div className="topbarIconContainer">
            <AccountPicker show={showProfilePicker} handleSwitchAccount={handleSwitchAccount} />
          </div>
        </div>
      </div>
    </div>
  );
}
