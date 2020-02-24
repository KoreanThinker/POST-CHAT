import { gql } from "apollo-boost";

export interface createPostingData {
    insert_posting: any
}

export interface createPostingVariables {
    description: string;
    userid: string;
}

export default gql`
 mutation createPosting($description: String!, $userid: String!) {
  insert_posting(objects: {description: $description, userid: $userid}) {
    returning {
      id
    }
  }
}
`