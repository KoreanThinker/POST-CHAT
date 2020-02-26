import { gql } from "apollo-boost";


export interface chat {
  userid: string;
  description: string;
  id: string;
}

export interface subscriptionChatData {
  chat: chat[];
}

export interface subscriptionChatVariables {
  limit: number;
}

export default gql`
  subscription subscriptionChat($limit: Int) {
    chat(order_by: {created_at: desc}, limit: $limit) {
        description
        userid
        id
    }
  }
`