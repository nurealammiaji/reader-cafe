import { useEffect, useState } from 'react';
import './Layout.css';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

const Layout = () => {

    const [blogs, setBlogs] = useState([]);
    const [readTime, setReadTime] = useState(0);
    let [totalBookmarks, setTotalBookmarks] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, []);

    const markAsRead = (readingTime) => {
        let totalReadingTime = readingTime + readTime;
        setReadTime(totalReadingTime);
    }

    // let totalPosts = [];
    // const allPosts = (posts) => {
    //     let newTotalPosts = [...totalPosts, posts];
    //     totalPosts = newTotalPosts;
    //     console.log(totalPosts);
    // }

    const allPosts = (bookmarks) => {
        let newBookmarks = [...totalBookmarks, bookmarks];
        setTotalBookmarks(newBookmarks);
        console.log(newBookmarks);
    }

    return (
        <div className='layout'>
            <div className='blog-area'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} markAsRead={markAsRead} allPosts={allPosts}></Blog>)
                }
            </div>
            <div className='blog-sidebar'>
                <div className='reading-time'>
                    <h3>Spent time on read: {readTime} min</h3>
                </div>
                <div className='bookmarks'>
                    <h3>Bookmarked Blogs: {totalBookmarks.length} </h3>
                    {
                        totalBookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Layout;