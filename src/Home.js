import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  
  const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: 1 },
    {title: 'Welcome party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
    {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mario', id: 3 }
  ]);
  
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }
/* By passing useEffect an array [] as a second argument after the callback function
You can ensure that the useEffect() function will only run on the first render.

There by doing so the function willl only run once. */

  useEffect(() => {
    console.log('use effect ran');
    console.log(blogs);
  }, []);

  return ( 
    <div className="home">
      <BlogList blogs={ blogs } title="All Blogs!" handleDelete={ handleDelete }/> 
      
    </div>
   );
}
 
export default Home;