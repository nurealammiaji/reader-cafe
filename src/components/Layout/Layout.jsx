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
                <Blog blogs={blogs}></Blog>
            </div>
            <div className='blog-sidebar'>
            </div>
        </div>
    );
};

export default Layout;