import { gql } from "apollo-boost";

export interface createPostingCommentData {
    insert_posting_comment: any
}

export interface createPostingCommentVariables {
    description: string;
    userid: string;
    postid: string;
}

export default gql`
    mutation createPostingComment($description: String!, $postid: uuid!, $userid: String! ) {
        insert_posting_comment(objects: {description: $description, postid: $postid, userid: $userid}) {
            returning {
                id
            }
        }
    }
`