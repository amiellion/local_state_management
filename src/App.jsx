import Home from './pages/Home';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import Todo from './pages/Todo';
import EditProfile from './pages/EditProfile';
import ViewProfile from './pages/ViewProfile';
import { fetchPokemon } from './store/counter/slice';
import React, { useEffect } from 'react';



function App() {

    const dispatch = useDispatch();
    const pokemons = useSelector(state => state?.counter?.pokemons);
    const renders = React.useRef(0);

    renders.current += 1;

    useEffect(() => {
        dispatch(fetchPokemon({ a: 'a', b: 'b' }));
    }, []);
    return (
        <>
            <div>
                renders:{renders?.current}
                <ul>
                    {pokemons?.length > 0 && pokemons?.map((item, index) => <li key={`${item?.name}_${index}`}>{item?.name}</li>)}
                </ul>
            </div>
            <BrowserRouter>
                <nav>
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
            </BrowserRouter>
        </>
    );
}

export default App;