import {default as fetchData} from '../src/fetch'
import {useState, useEffect} from 'react';
import {default as Post} from '../components/Gram.js';
export default function Feed () {
  const [feed, populateFeed] = useState([]);

  useEffect(()=>{
    fetchData()
    .then((data)=>{
      populateFeed(data.data);
    })
    .catch(()=>{
      console.log("something went wrong.")
    })
  },[])

  if (feed.length === 0 ) {
    return (<p>loading feed...</p>)
  } else {
    return feed.map((postData)=>(<Post data={postData} />))
  }

}
