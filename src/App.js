import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Lists from './Lists';
import {NavDropdownMenu} from "react-bootstrap-submenu";
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect( () => {
    axios.get("http://localhost:3001/category")
        .then( res => {
          setCategories(res.data);
        });
    
    axios.get("http://localhost:3001/author")
          .then( res => {
            setAuthors(res.data);
          });
  })



  return(
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">BookReads</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdownMenu title="Category" id="collasible-nav-dropdown">
              {categories.map( category => 
                <NavDropdown.Item href={"/category/"+category.category} >{category.category}</NavDropdown.Item>
              )}
            </NavDropdownMenu>
            <NavDropdownMenu title="Author" id="collasible-nav-dropdown">
              {authors.map( author => 
                <NavDropdown.Item href={"/author/"+author.author}>{author.author}</NavDropdown.Item>
              )}
            </NavDropdownMenu>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      <div class="title-header">Manage all your read books here with us.</div>

      <Lists pathname={window.location.pathname} />
    </div>
  )
};

export default App;