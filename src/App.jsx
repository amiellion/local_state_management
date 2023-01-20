import Home from './pages/Home';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Todo from './pages/Todo';
import EditProfile from './pages/EditProfile';
import ViewProfile from './pages/ViewProfile';
function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to={`/`}>Home</Link>
                <Link to={`/todo`}>Profile</Link>
                <Link to={`/edit_profile`}>Profile</Link>
                <Link to={`/view_profile`}>Profile</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/edit_profile" element={<EditProfile />} />
                <Route path="/view_profile" element={<ViewProfile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;