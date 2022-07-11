import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { buyCake, restockCakes } from "./redux/cakeSlice";
import { buyIcecream, restockIcecreams } from "./redux/iceCreamSlice";
import { getUsersRequest } from "./redux/userSlice";
import { fetchPosts } from "./redux/postSlice";

function App() {
  const cakes = useSelector((state) => state.cake.numOfCakes);
  const icecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const { users, loading, error } = useSelector((state) => state.user);

  const {
    posts,
    loading: postLoading,
    error: postError,
  } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  if (error) {
    console.log(error);
    return <div>Error</div>;
  }

  if (postError) {
    console.log(postError);
    return <div>Error</div>;
  }

  return (
    <div className="App">
      <h1>Cakes and Icecreams</h1>
      <p>
        No of cakes - <strong>{cakes}</strong>
      </p>
      <p>
        No of icecreams - <strong>{icecreams}</strong>
      </p>
      <button onClick={() => dispatch(buyCake())}>Buy one Cake</button>
      <br />
      <button onClick={() => dispatch(buyIcecream())}>Buy two icecreams</button>
      <br />
      <button onClick={() => dispatch(restockCakes(3))}>
        Restock with 3 cakes
      </button>
      <br />
      <button onClick={() => dispatch(restockIcecreams(6))}>
        Restock with 6 icecreams
      </button>
      <br />
      {/* <button onClick={() => dispatch(buyCakeFree())}>
        Buy a Cake get an ice-cream free !!
      </button> */}
      <h1>Get Users using redux sagas</h1>
      <button onClick={() => dispatch(getUsersRequest())}>Get Users</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        users &&
        users.length > 0 &&
        users.map((user) => <p key={user.id}>{user.name}</p>)
      )}
      <h1>Get Posts using redux thunk</h1>
      <button onClick={() => dispatch(fetchPosts())}>Get Posts</button>
      {postLoading ? (
        <p>Loading...</p>
      ) : (
        posts &&
        posts.length > 0 &&
        posts.map((post) => <p key={post.id}>{post.title}</p>)
      )}
    </div>
  );
}

export default App;
