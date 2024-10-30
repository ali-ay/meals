import { useParams } from "react-router-dom"

const ErrorPage = () => {

    const params = useParams()
    console.log(params)

  return (
    <div>ErrorPage</div>
  )
}
export default ErrorPage