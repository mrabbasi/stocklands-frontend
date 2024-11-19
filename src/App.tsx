import { useQuery } from '@apollo/client';
import { PETS_QUERY } from './api/queries';
import { useState,ChangeEvent } from 'react';

// Define the Pet interface
interface Pet {
  id: string;
  name: string;
  dob: string;
  available: boolean;
  category?: {
    name: string;
  };
}

// Define the query result interface
interface PetsQueryResult {
  pets: Pet[];
}

export default function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { loading, error, data } = useQuery<PetsQueryResult>(PETS_QUERY, {
    variables: {
      name:searchTerm
    },
    skip: !searchTerm
  });

  const handleSearch = (e:ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  let results=null
  if(data?.pets.length===0)
  {
    if(searchTerm!=='')
      results=(<p>No results Found!!!</p>);
  }
  else if (data?.pets){

    // Have not added anystyling to the table. Just added some very basic sanity checks and a basic HTML table
    results = (
      <table>
        <thead>
          <tr>
          <th>ID</th>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Available</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {data.pets.map((pet:Pet) => (
            <tr key={pet.id}>
              <td>{pet.id}</td>
              <td>{pet.name}</td>
              <td>{pet.dob}</td>
              <td>{pet.available ? 'Yes' : 'No'}</td>
              <td>{pet.category?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return (
    <div>
      <input type="text" placeholder="Search Pets..." value={searchTerm} onChange={handleSearch} autoFocus />
      {results}
    </div>
  )
}

