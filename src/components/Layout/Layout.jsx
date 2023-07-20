import { useEffect, useState } from 'react';
import './Layout.css';
import Blog from '../Blog/Blog';

const Layout = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, []);

    return (
        <div className='layout'>
            <div className='blog-area'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
            <div className='blog-sidebar'>
                <div className='reading-time'>
                    <p>Reading Time</p>
                </div>
                <div className='bookmarks'>
                    <p>Bookmarks</p>
                </div>
            </div>
        </div>
    );
};

export default Layout;