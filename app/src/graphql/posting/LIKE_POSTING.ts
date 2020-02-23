import { gql } from "apollo-boost";


export interface likePostingData {
    insert_posting_like: any;
}

export interface likePostingVariables {
    postid: string;
    userid: string;
}

export default gql`
    mutation likePosting($postid: uuid!, $userid: String!) {
        insert_posting_like(objects: {postid: $postid, userid: $userid}) {
            returning {
                postid
            }
        }
    }
`