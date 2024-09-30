import React, { useState, useEffect } from "react";

function App() {
  const [images, setImages]=useState([]);
  const [isLoading, setIsLoading]=useState(true);
  const [term, setTerm]=useState('');

  useEffect( ()=>{
    fetch(`https://pixabay.com/api/?key=${process.eventNames.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then( res => res.json())
    .then( data => {
      setImages(data.hits)
      setIsLoading(false)
    })
    .catch( error => console.log("error: "+error))
  })
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src="https://unsplash.com/random" alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by John Doe
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            40000
          </li>
          <li>
            <strong>Downloads: </strong>
            300
          </li>
          <li>
            <strong>Likes: </strong>
            400
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
        #tag1
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
        #tag2
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
        #tag3
        </span>
      </div>
    </div>
  );
}

export default App;
