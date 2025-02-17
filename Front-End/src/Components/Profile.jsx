export default  Profile = (props) => {
    const [likes, setLikes] = useState(0);
  
    return (
      <div>
        <h2>{props.name}, {props.age} years old</h2>
        <p>Likes: {likes}</p>
        <button onClick={() => setLikes(likes + 1)}>Like ❤️</button>
      </div>
    );
  };
  
