import { useEffect, useState } from 'react';
import './Layout.css';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {

    const [blogs, setBlogs] = useState([]);
    const [readTime, setReadTime] = useState(0);
    const [totalBookmarks, setTotalBookmarks] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, []);

    const markAsRead = (readingTime) => {
        let totalReadingTime = readingTime + readTime;
        setReadTime(totalReadingTime);
    }

    const allPosts = (bookmarks) => {
        let newBookmarks = [...totalBookmarks, bookmarks];
        setTotalBookmarks(newBookmarks);
    }


    const toastOn = () => toast("Bookmark already added", { autoClose: 3000 });

    return (
        <>
            <ToastContainer position='top-center' autoClose={3000} />
            <div className='layout'>
                <div className='blog-area'>
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog} markAsRead={markAsRead} allPosts={allPosts} toastOn={toastOn}></Blog>)
                    }
                </div>
                <div className='blog-sidebar'>
                    <div className='reading-time'>
                        <h3>Spent time on read: {readTime} min</h3>
                    </div>
                    <div className='bookmarks'>
                        <h3>Bookmarked Blogs: {totalBookmarks.length} </h3>
                        {
                            totalBookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;