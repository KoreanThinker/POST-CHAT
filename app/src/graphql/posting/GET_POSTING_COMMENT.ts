import { gql } from "apollo-boost";


export interface postingComment {
  userid: string;
  description: string;
  id: string;
}

export interface getPostingCommentData {
  posting_comment: postingComment[];
}

export interface getPostingCommentVariables {
  limit: number;
  offset: number;
  postid: string;
}

export default gql`
  query getPostingComment($limit: Int, $offset: Int!, $postid: uuid) {
    posting_comment(where: {postid: {_eq: $postid}}, limit: $limit, offset: $offset, order_by: {created_at: desc}) {
        userid
        description
        id
    }
  }

`