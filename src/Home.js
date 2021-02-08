import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  
  const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: 1 },
    {title: 'Welcome party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
    {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mario', id: 3 }
  ]);

  const [name, setname] =useState('Mario');
  
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }
/* By passing useEffect function a dependency array with a value like 
[name ] as a second argument 
after the callback function
you can ensure that the useEffect() function will only run on the first render
and when that dependency value is changed.*/

  useEffect(() => {
    console.log('use effect ran');
    console.log(name);
  }, [ name ]);

  return ( 
    <div className="home">
      <BlogList blogs={ blogs } title="All Blogs!" handleDelete={ handleDelete }/> 
      <button onClick={() => setname('Luigi')}>Change Name</button>
      <p>{ name }</p>
      
    </div>
   );
}
 
export default Home;