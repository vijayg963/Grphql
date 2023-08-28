import { useQuery } from "@apollo/client"
import { GET_LAUNCHES } from "../graphql/query"
import { Link } from "react-router-dom"
import "../stylesheet/capsule.css"

export const Capsules = () => {
  const { loading, error, data } = useQuery(GET_LAUNCHES)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>
  console.log(data.rockets)
  // alert(JSON.stringify(data))
  return (
    <>
      <button>
        <Link to={"/"}>Home</Link>
      </button>
      <div className="rockets">
        {data.rockets.map((elm: any) => (
          <div className="rocketCard">
            <h2>
              <strong>Rocket Name :</strong> {elm.name} ✔⚡🚀, stages:{" "}
              {elm.stages}
            </h2>
            <p>
              <strong>First Flight :</strong> {elm.first_flight}
            </p>
            <p>
              <strong>Company :</strong> {elm.company}
            </p>
            <p>
              <strong>Type :</strong> {elm.__typename}
            </p>
            <p>
              <strong> :</strong> {elm.description}
            </p>
            <p>
              <strong>Description :</strong> {elm.description}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}
