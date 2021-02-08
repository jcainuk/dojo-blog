import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  

  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  // create an error state with initial value set to null

  const [error, setError] = useState(null);


  useEffect(() => {
    // Don't use SetTimeout in real life. This was just to see the loading message in browser.
    //deliberate typo in url in fetch to test error message
    setTimeout(() => {fetch('http://localhost:8000/blogss')
    .then(res => {
      if(!res.ok) {
        throw Error('could not fetch the data for that resource');
      }

      return res.json()
    })
    .then( data => {
      setBlogs(data);

      //If we get data back cancel the loading message
      setIsPending(false);

      //If we get data back then cancel the error message
      setError(null);
      })
      .catch(err => {

        // Stop the loading message 
        
        setIsPending(false);

        // Store the error to a state so we can output it in browser 
        setError(err.message);
      });
    }, 1000);
  }, []);
    

  return ( 
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={ blogs } title="All Blogs!" /> }
      
      
    </div>
   );
}
 
export default Home;