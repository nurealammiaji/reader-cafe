import './Bookmark.css';

const Bookmark = (props) => {

    const {title} = props.bookmark;
    console.log(title);

    return (
        <div>
            <div className='bookmark'>
                <h4>{title}</h4>
            </div>
        </div>
    );
};

export default Bookmark;