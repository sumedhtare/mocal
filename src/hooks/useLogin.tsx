import { useContext } from 'react'
import { AppContext } from '../provider/appProvider/appContext'

type MockDataProps = Record<string, {
  password: string
}>

const mockData: MockDataProps = {
  'sumedh.tare@gmail.com': {
    password: '12345'
  }
}

interface loginWithEmailAndPasswordProps {
  email: string
  password: string
}
const useLogin = () => {
  const { setUser } = useContext(AppContext)

  const loginWithEmailAndPassword = async ({ email, password }: loginWithEmailAndPasswordProps) => {
    return await new Promise((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (mockData[email] && mockData[email].password === password) {
        const x: any = { ...mockData[email] }
        x.email = email
        delete x.password
        setUser(x)
        resolve({ user: x })
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({ message: 'Please enter correct credentails' })
        setUser(null)
      }
    })
  }

  return { loginWithEmailAndPassword }
}

export default useLogin
