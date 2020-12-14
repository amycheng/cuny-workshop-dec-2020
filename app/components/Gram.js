import {default as fetchData} from '../src/fetch'
import {useState, useEffect} from 'react';
import {default as PostHeader } from '../components/postHeader';
import {default as Content } from '../components/content';
import {default as Actions } from '../components/actions';
import {default as Description } from '../components/description';
import {default as CommentForm} from '../components/CommentForm';

export default function Post (data) {
  const [commentFormActve, toggleComment] = useState(false);
  const {
    username,
    userPic,
    image,
    description
  } = data.data;

  if (commentFormActve === true) {
    return (<CommentForm handler={()=>toggleComment(false)} />)
  } else {
    console.log(data)
    return (
      <div className="gram">
      <PostHeader username={username} userPic ={userPic} />
      <Content image={image}/>
      <Actions commentHandler={()=>toggleComment(true)} />
      <Description username={username} description={description} />
      <style jsx>
      {`
      width: 400px;
      margin: 0 auto;
      border: 1px solid #eee;
      padding: 1em;
      border-radius: 5px;
      box-shadow: 1px 1px 1px #eee;
      margin-bottom: 2em;
      `}
      </style>
      </div>
      )
    }
  }
