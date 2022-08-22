import './App.css';
// import AddPostForm from './features/AddPostForm';
// import PostsList from './features/PostsList';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';

function App() {
  return (
    <main>
      <h1>Redux toolkit</h1>
      <PostsList />
      <AddPostForm />
    </main>
  );
}

export default App;
