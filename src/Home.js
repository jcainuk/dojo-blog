import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  // Blogs initial state is null (a falsey value)

  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);


  useEffect(() => {
    // Don't use SetTimeout in real life. This was just to see the loading message in browser.
    setTimeout(() => {fetch('http://localhost:8000/blogs')
    .then(res => {
      return res.json()
    })
    .then( data => {
      setBlogs(data);
      setIsPending(false);
      })
      .catch(err => {
        console.log(err.message);
      });
    }, 1000);
  }, []);
    

  return ( 
    <div className="home">
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={ blogs } title="All Blogs!" /> }
      
      
    </div>
   );
}
 
export default Home;