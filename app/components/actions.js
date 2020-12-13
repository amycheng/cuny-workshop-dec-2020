import {useState} from 'react';
export default function  actions (props) {
  const [liked, setLike] = useState(false);
  return (
    <div>
    <button onClick={()=>setLike(!liked)}>
      <img src={liked ? "/liked.svg" : "/unliked.svg"} />
    </button>
    <button>
      <img src="/comment.svg" alt="" />
    </button>
    <style jsx>
      {`
        button {
          width: 25px;
          height: 25px;
  border: 0;
  background-color: inherit;
        }

        button img {
          max-width: 100%;
        }
`      }
    </style>
    </div>
    )
  }
