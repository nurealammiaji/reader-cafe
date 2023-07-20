import { useEffect, useState } from 'react';
import './Layout.css';
import Blog from '../Blog/Blog';

const Layout = () => {

    const [blogs, setBlogs] = useState([]);
    const [readTime, setReadTime] = useState(0);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, []);

    const markAsRead = (readingTime) => {
        console.log(readingTime);
        let newReadingTime = readingTime + readTime;
        setReadTime(newReadingTime);
        console.log(readTime);
    }

    return (
        <div className='layout'>
            <div className='blog-area'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} markAsRead={markAsRead}></Blog>)
                }
            </div>
            <div className='blog-sidebar'>
                <div className='reading-time'>
                    <h3>Spent time on read: {readTime} min</h3>
                </div>
                <div className='bookmarks'>
                    <h3>Bookmarked Blogs: </h3>
                </div>
            </div>
        </div>
    );
};

export default Layout;