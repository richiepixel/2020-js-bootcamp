import { useAuth } from "../hook/authHook"

export const WelcomeUser = () => {
  const auth = useAuth()
  return auth.user && (
    <p>Welcome {auth.user}!</p>
  )
}