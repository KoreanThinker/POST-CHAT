import { gql } from "apollo-boost";

export interface createChatData {
    insert_chat: any
}

export interface createChatVariables {
    description: string;
    userid: string;
}

export default gql`
 mutation createChat($description: String!, $userid: String!) {
  insert_chat(objects: {description: $description, userid: $userid}) {
    returning {
      id
    }
  }
}
`