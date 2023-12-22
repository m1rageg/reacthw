import Card from './components/Card/Card.jsx';
import cources from './data.js';

const App = () => {
    return (
        <div className="app">
            {cources.map(course => (
                <Card key={course.id} course={course} />
            ))}
        </div>
    );
};

export default App
