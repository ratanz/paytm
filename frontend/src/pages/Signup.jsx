import React from 'react'
import { Heading } from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import { ButtonWarning } from '../components/ButtonWarning'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <div className='bg-zinc-900 min-h-screen flex items-center justify-center p-4'>
      <div className='max-w-md w-full bg-zinc-800/30 backdrop-blur-sm rounded-lg border border-zinc-500/50 shadow-lg'>
     
        <div className='p-6 space-y-4'>
          <Heading label="Sign Up" />
          <SubHeading label="Create an account" />

          <div className='mt-4 p-2 '>
          <div className='flex gap-2 mb-1 '>  
            <InputBox onChange={e => {
              setFirstName(e.target.value)
            }} label="First Name" placeholder="John" />
            <InputBox
              onChange={e => {
                setLastName(e.target.value)
              }}
  
              label="Last Name" placeholder="Doe" />
            </div>

            <InputBox
              onChange={e => {
                setUsername(e.target.value)
              }}
              label="Email" placeholder="johndoe@example.com" />
            <InputBox
              onChange={e => {
                setPassword(e.target.value)
              }}
              label="Password" placeholder="********" />

            <div className='mt-4'>
              <Button label="Sign Up" onClick={async () => {
                const response = await axios.post('http://localhost:3000/api/v1/user/signup', {
                  username,
                  firstName,
                  lastName,
                  password
                })
                localStorage.setItem('token', response.data.token)
                navigate('/dashboard')
              }} />
            </div>

            <ButtonWarning
              label="Already have an account?"
              buttonText="Sign In"
              onClick={() => navigate("/signin")}
            />
          </div>
        </div>
      </div>

    </div>
  )
}
export default Signup

