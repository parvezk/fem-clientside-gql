import { gql } from 'urql'

export const IssuesQuery = gql`
  query IssuesQuery {
    issues {
      content
      createdAt
      id
      name
      status
    }
  }
`
