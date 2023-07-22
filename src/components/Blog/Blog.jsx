import './Blog.css';

const Blog = (props) => {

    const {author, author_image, image, title, read_time, publish_date} = props.blog;

    const markAsRead = props.markAsRead;
    const allPosts = props.allPosts;
    // const toastOn = props.toastOn;

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
                            <h3>{author}</h3>
                            <p>{publish_date}</p>
                        </div>
                    </div>
                    <div className='reading-details'>
                        <div>
                            <p>{read_time} Min read</p>
                        </div>
                        <div className='bookmark-btn'>
                            <button onClick={()=>allPosts(props.blog)}><svg id="i-bookmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M6 2 L26 2 26 30 16 20 6 30 Z" /></svg></button>
                        </div>
                    </div>
                </div>
                <h1>{title}</h1>
                <p>#beginners #programming</p>
                <br />
                <button onClick={()=>markAsRead(read_time)} className='read-btn'>Mark as Read</button>
                {/* <button onClick={toastOn}>Toast</button> */}
            </div>
        </div>
    );
};

export default Blog;