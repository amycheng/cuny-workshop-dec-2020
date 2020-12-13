export default function PostHeader (props) {
  return (
    <>
    <header>
      <img src={props.userPic} alt="{props.username}'s Profile Pic" />
      <p>{props.username}</p>
    </header>
    <style jsx>
{
`
  header {
  display: flex;
  padding-bottom: 1em;
  font-family: sans-serif;
  }
  img {
  object-fit:cover;
  border-radius:50%;
  width: 50px;
  margin-right: 10px;
  }
`
}
    </style>
    </>
    )
  }
