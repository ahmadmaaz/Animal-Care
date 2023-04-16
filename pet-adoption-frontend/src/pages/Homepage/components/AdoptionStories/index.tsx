import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { AdoptionStory } from '../../../../shared/types';
import AdoptStory from './components/AdoptStory';
import CustomHeader from '../CustomHeader';
type Props = {}


function AdoptionStories({}: Props) {
  const { data, isLoading, error } = useQuery({queryKey:['AdoptionStories'],queryFn: fetchData});

  async function fetchData() {
    const response = await axios.get("http://localhost:8084/api/adoptionStory/");
    return response.data;
  }

  console.log(data)
  if(isLoading){
    return <div>Loading..</div>
  }
  return (
    <div className="my-4 mx-24 ">
      <CustomHeader header='Adoption Stories'/>
      {data.data ? (
        <div className="grid grid-cols-3 gap-4 items-center justify-center">
          {data.data.map((adoptionStory: AdoptionStory) => (
            <AdoptStory
              url={adoptionStory.url}
              title={adoptionStory.title}
              caption={adoptionStory.caption}
              key={adoptionStory.id}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AdoptionStories