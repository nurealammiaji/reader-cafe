import './ExtraBlog.css';

const ExtraBlog = () => {
    return (
        <>
            <h1 className='title'>Extra Blog</h1>
            <hr />
            <div className='blog-container'>
                <div className='blog-card'>
                    <h3>Difference between Props vs State?</h3>
                    <hr />
                    <ul>
                        <li>Props are read-only.otherwise,State changes can be asynchronous.</li>
                        <li>Props are immutable.otherwise, State is mutable.</li>
                        <li>Props allow you to pass data from one component to other components as an argument.otherwise,State holds information about the components.</li>
                        <li>Props can be accessed by the child component.otherwise,State cannot be accessed by child components.</li>
                        <li>Props are used to communicate between components.otherwise,States can be used for rendering dynamic changes with the component.</li>
                        <li>Stateless component can have Props.otherwise,Stateless components cannot have State.</li>
                        <li>Props make components reusable.otherwise,State cannot make components reusable.</li>
                        <li>Props are external and controlled by whatever renders the component.otherwise,The State is internal and controlled by the React Component itself.</li>
                    </ul>
                </div>
                <div className='blog-card'>
                    <h3>Purpose of useEffect other than fetching data?</h3>
                    <hr />
                    <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.useEffect accepts two arguments. The second argument is optional.</p>
                    <ul>
                        <li>useEffect use cases</li>
                        <li>Running once on mount: fetch API data.</li>
                        <li>Running on state change: validating input field.</li>
                        <li>Running on state change: live filtering.</li>
                        <li>Running on state change: trigger animation on new array value.</li>
                        <li>Running on props change: update paragraph list on fetched API data update</li>
                    </ul>
                </div>
                <div className='blog-card'>
                    <h3>How does React work?</h3>
                    <hr />
                    <p>ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components. It is important to note that ReactJS is not a JavaScript framework. React is a front-end JavaScript library. React is capable of making API calls (sending the request to the backend), which deal with the data. React cannot process the database or the data source itself.</p>
                </div>
                <div className='blog-card'>
                    <h3>How does useState work?</h3>
                    <hr />
                    <p>useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
                </div>
            </div>
        </>
    );
};

export default ExtraBlog;