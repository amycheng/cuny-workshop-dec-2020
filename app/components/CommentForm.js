export default function CommentForm ({handler}) {
  return (
    <div className="container">
      <input placeholder="Comment on this post" />
      <button onClick = {()=> handler()} >Post</button>
      <style jsx>
        {`
          .container {
            width: 400px;
            margin: 0 auto;
          }
          button {
            border: 0;
            background-color: inherit;
          }
          input {
            border-radius: 5px
          }
        `}
      </style>
    </div>
  )
}
