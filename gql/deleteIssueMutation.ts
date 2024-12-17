import { gql } from 'urql'

export const DeleteIssueMutation = gql`
  mutation DeleteIssue($id: ID!) {
    deleteIssue(id: $id)
  }
`
