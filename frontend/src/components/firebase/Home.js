import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import TodayMenu from '../todaymenu/TodayMenu'
import TodayMenuAd from '../todaymenu/TodayMenuAd'
import Button from '@mui/material/Button';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Db from './Db'



const Home = () => {
const [user] = useAuthState(auth)

  return (

    <div>
    {user && user.email === "purplepiku4040@gmail.com" ? (
        <div>
            <TodayMenuAd />
            <UserInfo/>
            
        </div>

    ) : user ? (
        <div>
            <TodayMenu />
            <UserInfo/>
            
        </div>
    ) : (
        <SignInButton />
    )}
    </div>
  )
}

export default Home

//グーグルボタンでサインイン
function SignInButton() {
    const signInWithGoogle = () => {
        //firebaseを使ってGoogleでログインする
        //Googleの認証プロバイダーを作成
        signInWithPopup(auth, provider)

    };

    return(
        <div className='container'>
        
        <Button  onClick = {signInWithGoogle} variant="contained" style={{ height: "40px" }} endIcon={<AdminPanelSettingsIcon />}>
            login
        </Button>
        </div>
    )
}

//グーグルボタンでサインアウト
function SignOutButton() {

    return(
        <button onClick = {() => auth.signOut()}> 
            <p>Sign out</p>
        </ button>
    )
}

function UserInfo() {
    const [user] = useAuthState(auth)

    return (
        <div className='userInfo'>
            <h2>ユーザー名：{user.displayName}</h2>
            <h2>メールアドレス：{user.email}</h2>
            <img src={auth.currentUser.photoURL} alt="user photo" />
            <div>
                <SignOutButton />
            </div>
        </div>
    )
}
