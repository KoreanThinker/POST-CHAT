import { gql } from "apollo-boost";

export interface getProfile {
    id: string;
    name: string;
}

export interface getProfileData {
    profile: getProfile[]
}

export default gql`
 {
    profile {
    id
    name
  }
}
`