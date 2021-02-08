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
/* useEffect is a function that runs after every render of the page
 e.g. delete/refresh etc.

 Be very careful with it because changing the state of your data (e.g. with useState) 
 
 will trigger the useEffect function. You may get stuck in an infinite loop */

  useEffect(() => {
    console.log('use effect ran');
    console.log(blogs);
  });

  return ( 
    <div className="home">
      <BlogList blogs={ blogs } title="All Blogs!" handleDelete={ handleDelete }/> 
      
    </div>
   );
}
 
export default Home;