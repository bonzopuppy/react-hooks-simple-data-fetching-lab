// create your App component here
import React, { useEffect, useState } from 'react'

function App () { 

    const [dogPic, setDogPic] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then((data) => {
            setDogPic(data.message);
            setIsLoaded(true);
        })
    }, []);


    if (!isLoaded) return <p>Loading...</p>;


  return (
    <div>
        <p><img src={dogPic} alt="A Random Dog" /></p>
    </div>
  )
}

export default App


