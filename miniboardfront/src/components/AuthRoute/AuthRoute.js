import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Navigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authenticatedState, checkAdminState } from '../../atoms/Auth/AuthAtom';


const AuthRoute = ({ path, element }) => {
    const [ authState, setAuthState ] = useRecoilState(authenticatedState);
    const [ adminState, setAdminState ] = useRecoilState(checkAdminState);
    const [ adminCheckRefresh, setAdminCheckRefresh ] = useState(true);

    const authPaths = ["/auth"]

    const authenticate = useQuery(["authenticate"], async ()=> {
        const option = {
            headers: {
                Authorization : `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
            const response = await axios.get("http://localhost:8080/auth/authenticate", option);
            // console.log(response)
            return response;
        
    }, {
        onSuccess: (response) => {
            if(response.status === 200) {
                if(response.data) {
                    setAuthState(true);
                }
            }  
        }
    })

    const adminCheck = useQuery(["adminCheck"], async() => {
        const option = {
            headers: {
                Authorization : `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        try {
            const response = await axios.get("http://localhost:8080/auth/userInfo", option)
    
            setAdminCheckRefresh(false);
            if(!!response.data.authorities){
                if (response.data.authorities[0].authority === "ROLE_ADMIN") {
                    setAdminState(true);
                }
            }
            return response
        } catch (error) {
            if(error){
                localStorage.removeItem("accessToken")
            }
        }
    }, {
        enabled: adminCheckRefresh,
        // onSuccess: (response) => {
            // console.log()
        // }
    })

    if(authenticate.isLoading) {
        return <div>로딩중</div>
    }

    if(authPaths.filter(authPath => path.startsWith(authPath)).length > 0) {
        if(authState) {
            return <Navigate to="/" />;
        } else {
            return element;
        }
    }

    if(path === "/admin" && !adminState){
        return <div>잘못된 접근입니다.</div>
    }

    if(!authState) {
        return <Navigate to="/auth/home" />;
    }

    return element;

};

export default AuthRoute;