import {default as fetchData} from '../src/fetch'
import {useState, useEffect} from 'react';
import {default as PostHeader } from '../components/postHeader';
import {default as Content } from '../components/content';
import {default as Actions } from '../components/actions';
import {default as Description } from '../components/description';
import {default as CommentForm} from '../components/CommentForm';

const singlePost = () => {
const [postData, setPost] = useState('EMPTY');
const [commentFormActve, toggleComment] = useState(false);
  useEffect(()=>{
    fetchData()
      .then((data)=>{
        setPost(data.data[0]);
      })
      .catch(()=>{
        console.log("something went wrong.")
      })
  },[])
  if (commentFormActve === true) {
    return (<CommentForm handler={()=>toggleComment(false)} />)
  } else if (postData !== "EMPTY") {
    return (
      <div className="gram">
      <PostHeader username={postData.username} userPic ={postData.userPic} />
      <Content image={postData.image}/>
      <Actions commentHandler={()=>toggleComment(true)} />
      <Description username={postData.username} description={postData.description} />
      <style jsx>
        {`
          width: 400px;
          margin: 0 auto;
          border: 1px solid #eee;
          padding: 1em;
          border-radius: 5px;
          box-shadow: 1px 1px 1px #eee;
        `}
      </style>
      </div>
    )
  } else {
    return (<p>loading...</p>)
  }
}

export default singlePost;
