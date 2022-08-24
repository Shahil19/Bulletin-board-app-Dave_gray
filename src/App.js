import './App.css';
// import AddPostForm from './features/AddPostForm';
// import PostsList from './features/PostsList';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import ReactionButtons from './features/posts/ReactionButtons';

function App() {
  return (
    <main>
      <h3 style={{ color: "red" }}>git commit -m"reaction features added"</h3>
      <h1>Redux toolkit</h1>
      <PostsList />
      <AddPostForm />
      <ReactionButtons />


    </main>
  );
}

export default App;
