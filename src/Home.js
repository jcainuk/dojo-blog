import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  // Blogs initial state is null (a falsey value)

  const [blogs, setBlogs] = useState(null);

  const [name, setname] =useState('Mario');
  

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then(res => {
      return res.json()
    })
    .then( data => {
      setBlogs(data);
    });
  }, []);

  return ( 
    <div className="home">

{/* 1. Comments inside children need to be in braces.
    2. Below we are using Javascript logic. Everything to the left of '&&' won't run
     if it is null (a falsey value). It only runs is a truthy value. 
    3. This is how we conditionally output parts of a template */}

      {blogs && <BlogList blogs={ blogs } title="All Blogs!" /> }
      <button onClick={() => setname('Luigi')}>Change Name</button>
      <p>{ name }</p>
      
    </div>
   );
}
 
export default Home;