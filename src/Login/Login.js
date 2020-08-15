import style from './Login.module.css'
import React, { useState } from 'react'
import { useHistory} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { auth, googleAuth } from '../firebase';


function Login() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setusername] = useState('')

  const signInGoogle = () => {
    auth.signInWithPopup(googleAuth)
      .then(() => {
        history.push('/')
      }).catch((err) => {
        console.log(err.message);
      })
  }

  const login = (e) => {
    e.preventDefault()

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/')
      })
  }

  const register = (e) => {
    e.preventDefault()
    
    auth.createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        authUser.user.updateProfile({
          displayName: username
        })
        history.push('/')
      })
  }

  return (
    <div className={style.login}>
      <h1>Sign in</h1>
      <form autoComplete="off" className={style.login}>
        <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="standard-basic" label="Email" />
        <TextField value={username} onChange={(e) => setusername(e.target.value)} id="standard-basic" label="Username" />
        <TextField type='password' value={password} onChange={(e) => setPassword(e.target.value)} id="standard-basic" label="Password" />
        <Button onClick={login} className={style.button__form} variant="contained">Sign in</Button>
        <Button onClick={register} variant="contained">Create your account</Button>
        <Button style={{width: '100%'}} color='primary' onClick={signInGoogle} variant="contained">Sign In with <img style={{marginLeft: '5px'}} src='https://www.gstatic.com/mobilesdk/160512_mobilesdk/auth_service_google.svg' alt='' /></Button>
      </form>
    </div>
  )
}

export default Login
