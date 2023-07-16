import { useState} from 'react'
import LandingIntro from './LandingIntro'
import ErrorText from '../../components/Typography/ErrorText'
import InputText from '../../components/Input/InputText'
import axios from 'axios'

function Login() {
  const INITIAL_LOGIN_OBJ = {
    password: '',
    username: ''
  }

  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ)
  const [selectedRole, setSelectedRole] = useState('')

  const submitForm = async (e) => {
    e.preventDefault()
    setErrorMessage('')

    if (loginObj.username.trim() === '') return setErrorMessage('Username is required! (use any value)')
    if (loginObj.password.trim() === '') return setErrorMessage('Password is required! (use any value)')

    setLoading(true)

    try {
      let loginEndpoint = ''

      if (selectedRole === 'supervisor') {
        loginEndpoint = '/supervisor_login'
      } else if (selectedRole === 'admin') {
        loginEndpoint = '/admin_login'
      } else if (selectedRole === 'committee') {
        loginEndpoint = '/committee_login'
      }
      else if (selectedRole === 'student') {
        loginEndpoint = '/student_login'
      }

      const response = await axios.post(`http://127.0.0.1:5000/api${loginEndpoint}`, loginObj, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const { accessToken, type, error, message,user_id } = response.data
      console.log("Response:",response.data)
      if (error) {
        setErrorMessage(message)
        setLoading(false)
      } else {
        localStorage.setItem('token', JSON.stringify(accessToken))
        localStorage.setItem('type', JSON.stringify(type))
        localStorage.setItem('user_id', JSON.stringify(user_id))
        window.location.href = '/app/welcome'
      }
    } catch (error) {
      setLoading(false)
    }
  }

  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage('')
    setLoginObj({ ...loginObj, [updateType]: value })
  }

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value)
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <div className="">
            <LandingIntro />
          </div>
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
            <form onSubmit={submitForm}>
              <div className="mb-4">
                <InputText
                  type="text"
                  defaultValue={loginObj.username}
                  updateType="username"
                  containerStyle="mt-4"
                  labelTitle="Email Id"
                  updateFormValue={updateFormValue}
                />

                <InputText
                  defaultValue={loginObj.password}
                  type="password"
                  updateType="password"
                  containerStyle="mt-4"
                  labelTitle="Password"
                  updateFormValue={updateFormValue}
                />

                <div className="flex items-center justify-center mt-10">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="user-role"
                      value="supervisor"
                      className="radio checked:bg-red-500"
                      checked={selectedRole === 'supervisor'}
                      onChange={handleRoleChange}
                    />
                    <span className="ml-2">Supervisor</span>
                  </label>

                  <label className="inline-flex items-center ml-4">
                    <input
                      type="radio"
                      name="user-role"
                      value="admin"
                      className="radio checked:bg-blue-500"
                      checked={selectedRole === 'admin'}
                      onChange={handleRoleChange}
                    />
                    <span className="ml-2">Admin</span>
                  </label>

                  <label className="inline-flex items-center ml-4">
                    <input
                      type="radio"
                      name="user-role"
                      value="committee"
                      className="radio checked:bg-green-500"
                      checked={selectedRole === 'committee'}
                      onChange={handleRoleChange}
                    />
                    <span className="ml-2">Committee</span>
                  </label>
                  <label className="inline-flex items-center ml-4">
                    <input
                      type="radio"
                      name="user-role"
                      value="student"
                      className="radio checked:bg-yellow-500"
                      checked={selectedRole === 'student'}
                      onChange={handleRoleChange}
                    />
                    <span className="ml-2">Student</span>
                  </label>
                </div>
              </div>
              <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
              <button
                type="submit"
                className={`btn mt-2 w-full btn-primary${loading ? ' loading' : ''}`}
                disabled={loading}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
