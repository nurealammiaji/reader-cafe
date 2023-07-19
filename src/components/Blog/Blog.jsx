import './Blog.css';

const Blog = (props) => {

    const {author, author_image, image, title, read_time, publish_date} = props.blog;
    
    return (
        <div>
            <div className='blog'>
                <img src={image} alt="" />
                <div className='blog-details'>
                    <div className='author-details'>
                        <div className='author-image'>
                            <img src={author_image} alt="" />
                        </div>
                        <div className='author-info'>
                            <h4>{author}</h4>
                            <p>{publish_date}</p>
                        </div>
                    </div>
                    <div>
                        <p>{read_time}</p>
                    </div>
                </div>
                <h2>{title}</h2>
            </div>
        </div>
    );
};

export default Blog;