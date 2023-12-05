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
import PageContainer from './components/PageContainer';
function App() {
    return (
        <BrowserRouter>
            <PageContainer isRoot >

                <nav
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 15,
                        position: "fixed",
                        top: 0,
                        height: 35,
                        paddingLeft: "5%",
                        backgroundColor: "white",
                        borderBottom: "1px solid #ccc",
                        width: "100%"
                    }}
                >
                    <Link to={`/`}>Home</Link>
                    <Link to={`/todo`}>Todo</Link>
                    <Link to={`/edit_profile`}>Edit Profile</Link>
                    <Link to={`/view_profile`}>View Profile</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/edit_profile" element={<EditProfile />} />
                    <Route path="/view_profile" element={<ViewProfile />} />
                </Routes>
            </PageContainer>
        </BrowserRouter>
    );
}

export default App;