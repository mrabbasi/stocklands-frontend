import { gql } from "../__generated__";

export const PETS_QUERY = gql(`
  query PETS_QUERY($name:String,$min_age:Int,$category:ID){
    pets(filter:{
      name:$name,
      minAge:$min_age,
      category:$category   
    }) {
      ...PET_READ_FRAGMENT
    }
  }
`);

