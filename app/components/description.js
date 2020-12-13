export default function description ({username, description}) {
  return (
    <div>
      <p><strong>{username}</strong> {description}</p>
      <style jsx>
        {`
           p {
             font-family: sans-serif;
           }
        `}
      </style>
    </div>
    )
  }
