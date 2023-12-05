import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";


//components
import EditProfile from './pages/EditProfile';
import Home from './pages/Home';
import PageContainer from './components/PageContainer';
import Todo from './pages/Todo';
import ViewProfile from './pages/ViewProfile';

//stpre
import { fetchPokemon } from './store/counter/slice';



function App() {

    // const dispatch = useDispatch();
    // const pokemons = useSelector(state => state?.counter?.pokemons);
    // const renders = React.useRef(0);

    // renders.current += 1;

    // useEffect(() => {
    //     dispatch(fetchPokemon({ a: 'a', b: 'b' }));
    // }, []);
    return (
        <>
            {/* <div>
                renders:{renders?.current}
                <ul>
                    {pokemons?.length > 0 && pokemons?.map((item, index) => <li key={`${item?.name}_${index}`}>{item?.name}</li>)}
                </ul>
            </div> */}
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
        </>
    );
}

export default App;