import React, { useEffect } from 'react';

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { AccountNavigator } from './AccountNavigator';
import { AppNavigator } from './AppNavigator';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { userSlice, userSignIn } from '../../redux/userSlice';


// components

// services
import { loginRequest } from '../../services/authentication/authentication.service';

export const Navigation = () => {

    const dispatch = useDispatch();

    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    // const handleSignIn = (userObject) => {
    //     const user = {
    //         uid: userObject.user.uid,
    //         email: userObject.user.email,
    //         emailVerified: userObject.user.emailVerified,
    //         photoURL: userObject.user.photoURL
    //     }
    //     console.log(user)
    //     dispatch(userSignIn(user));
    //     console.log(isAuthenticated);

    // }

    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    // useEffect(() => {
    //     loginRequest('rusaf@wekick.ca', 'password').then((user) => {
    //         //console.log(user);
    //         //setIsAuthenticated(true);
    //         handleSignIn(user);

    //     }).catch((e) => {
    //         console.log(e);
    //     });

    // }, [])

    return (
        <NavigationContainer>
            {
                !isAuthenticated ? <AccountNavigator/> : <AppNavigator/>
            }
        </NavigationContainer>
        
    )
}
