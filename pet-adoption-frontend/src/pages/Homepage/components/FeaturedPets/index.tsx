import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Pet } from '../../../../shared/types';
import PetCard from '../../../../shared/PetCard';
import CustomHeader from '../CustomHeader';
type Props = {}

function FeaturedPets({}: Props) {
    const { data, isLoading, error } = useQuery({queryKey:['featuredPets'],queryFn: fetchData});
  async function fetchData() {
    const response = await axios.get("http://localhost:8084/api/pet/featured/");
    return response.data;
  }
  if(isLoading){
    return <div>Loading..</div>
  }
  return (
    <div className="mx-24 my-4 ">
      <CustomHeader header='Featured Pets' />
      {data.data ? (
        <div className="grid grid-cols-4 gap-4 items-center justify-center">
          {data.data.map((pet: Pet) => (
            <PetCard
              key={pet.id}
              name={pet.name}
              image={pet.image}
              age={pet.age}
              gender={pet.gender}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default FeaturedPets