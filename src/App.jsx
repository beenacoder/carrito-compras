import styled from 'styled-components'
import {NavLink, Switch, Route} from 'react-router-dom'
import Inicio from './componentes/Inicio'
import Blog from './componentes/Blog'
import Tienda from './componentes/Tienda'



const App = () => {
    return (
        <Contenedor>
            <Menu>  
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/tienda">Tienda</NavLink>
            </Menu>
            <main>
                <Switch>
                    <Route path="/" component={<Inicio />}/>
                </Switch>
            </main>
        </Contenedor>  
    )
}

const Contenedor = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
 
const Menu = styled.nav`
    width: 100%;
    display:flex;
    justify-content: space-between;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
        width: 80%;
    }
 
    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;
export default App;
