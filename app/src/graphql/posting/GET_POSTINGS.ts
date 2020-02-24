import { gql } from "apollo-boost";

export interface postingLike {
  userid: string;
}
export interface postingComment {
  id: string;
}

export interface posting {
  id: string;
  description: string;
  like: postingLike[];
  comment: postingComment[];
}

export interface getPostingData {
  posting: posting[];
}

export interface getPostingVariables {
  limit: number;
  offset: number;
}

export default gql`
  query getPosting($limit: Int, $offset: Int!) {
    posting(limit: $limit, offset: $offset, order_by: {created_at: desc}) {
      id
      description
      like {
        userid
      }
      comment {
        id
      }
    } 
  }

`