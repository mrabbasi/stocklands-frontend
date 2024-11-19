import { gql } from "../__generated__";

export const PET_READ_FRAGMENT = gql(`
  fragment PET_READ_FRAGMENT on PetType {
    id
    name
    dob
    available
    category{
      id
      name
    }
  }
`);