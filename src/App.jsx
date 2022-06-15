import { useState } from 'react'
import styled from 'styled-components'
import {NavLink, Routes, Route} from 'react-router-dom'
import Inicio from './components/Inicio'
import Blog from './components/Blog'
import Tienda from './components/Tienda'
import Error404 from './components/Error404'
import Carrito from './components/Carrito'



const App = () => {
//Ubicamos aqui la base de datos de productos para poder usarla en toda la aplicacion
    const productos = [
        {id:1, nombre: "Producto 1"},
        {id:2, nombre: "Producto 2"},
        {id:3, nombre: "Producto 3"},
        {id:4, nombre: "Producto 4"}
    ];

    //Ubicamos aqui los productos del carrito para poder acceder de todos lados
    const [carrito, cambiarCarrito] = useState([]);

    //Funcion para agregar productos al carrito
    const agregarProductoAlCarrito = (idProducto, nombre) => {
        //Si el carrito no tiene elementos entonces agregamos uno
        if(carrito.length === 0 ){
            cambiarCarrito([{id: idProducto, nombre: nombre, cantidad: 1}]);
        } else {
            //De otra forma tenemos que revisar que el carrito no tenga ya el producto que queremos agregar
            //Si ya lo tiene entonces queremos actualizar su valor.
            //Si no tiene el producto entonces lo agregamos.

            //Para poder editar el arreglo tenemos que clonarlo
            const nuevoCarrito = [...carrito];

            //Comprobnamos si el carrito ya tiene el ID del producto a agregar
           const yaEstaEnCarrito = nuevoCarrito.filter((productoDeCarrito) => {
                return productoDeCarrito.id === idProducto
            }).length > 0;

            //Si ya tiene el producto entonces lo tenemos que actualizar
            if(yaEstaEnCarrito) {
                //Para ello tenemos que buscarlo, obtener su posicion en el arreglo.
                //Y en base a su posicion ya actualizamos el valor.
            }
        }
    }

    return (
        <Contenedor>
            <Menu>  
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/tienda">Tienda</NavLink>
            </Menu>
            <main>
                <Routes>
                    <Route path="*" element={<Error404 />}/>
                    <Route path="/" element={<Inicio />}/>
                    <Route path="/blog" element={<Blog />}/>
                    <Route path="/tienda" element={<Tienda productos={productos} agregarProductoAlCarrito={agregarProductoAlCarrito}/>}> </Route> 
                </Routes>
            </main>
            <aside>
                <Carrito carrito={carrito} />
            </aside>
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
