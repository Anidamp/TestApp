import axios from 'axios';
import * as React from 'react';


export default function getImage() {
    return axios.get(
      `https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9`,
    )
    .then(r => r.data);
  }