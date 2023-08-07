import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import TodayMenu from '../TodayMenu'
import TodayMenuAd from '../TodayMenuAd'



const Home = () => {
const [user] = useAuthState(auth)

  return (

    <div>
    {user && user.email === "purplepiku4040@gmail.com" ? (
        <div>
            <TodayMenuAd />
            <UserInfo/>
            <SignOutButton />
        </div>

    ) : user ? (
        <div>
            <TodayMenu />
            <UserInfo/>
            <SignOutButton />
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
        <button onClick = {signInWithGoogle}> 
            <p>Sign in with Google</p>
        </ button>
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
        </div>
    )
}
