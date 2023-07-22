import './Bookmark.css';

const Bookmark = (props) => {

    const bookmark = props.bookmark;
    const {title} = bookmark;

    return (
        <div>
            <div className='bookmark'>
                <h4>{title}</h4>
            </div>
        </div>
    );
};

export default Bookmark;