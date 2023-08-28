import React from "react"
import { useQuery } from "@apollo/client"
import { CAMPANY_INFO } from "../graphql/query"
import { Link } from "react-router-dom"

// interface locationProps {
//   id: number | string
//   name: string
//   description: string
//   photo: any | null
// }

export const Home = () => {
  const { loading, error, data } = useQuery(CAMPANY_INFO)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>
  const { ceo, coo, cto } = data.company
  return (
    <>
      <Link to={"/capsules"}>capsules</Link>
      <div>
        <h1>SPACE X</h1>
        <h2>CEO: {ceo}</h2>
        <b>CTO: {cto}</b>
        <p>COO: {coo}</p>
      </div>
    </>
  )
}
