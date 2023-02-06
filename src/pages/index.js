import axios from "axios";
import React from "react";

const baseURL = "https://folk.ntnu.no/dybvig/mypage/database.php";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post[1]}</h1>
      
    </div>
  );
}