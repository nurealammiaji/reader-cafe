import './Blog.css';

const Blog = (props) => {
    return (
        <div>
            <h1>{props.blogs.length} </h1>
        </div>
    );
};

export default Blog;