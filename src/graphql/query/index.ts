import { gql } from "@apollo/client"

const CAMPANY_INFO = gql`
  query Company {
    company {
      ceo
      coo
      cto
    }
  }
`

const GET_LAUNCHES = gql`
  query Query {
    rockets {
      name
    }
    rockets {
      type
      success_rate_pct
      stages
      name
      mass {
        kg
      }
      height {
        feet
      }
      first_flight
      description
      company
    }
  }
`

export { CAMPANY_INFO, GET_LAUNCHES }
