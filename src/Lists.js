import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "./App.css";
import { Table } from 'react-bootstrap';

const Lists = (props) => {
    const [books, setBooks] = useState([]);
    const [count, setCount] = useState(1);

    const url = `http://localhost:3001${props.pathname}`;

    useEffect( () => {
        axios.get(url)
            .then( res => {
                console.log(res.data);
                setBooks(res.data);
            })
    });

    return(
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Book Name</th>
                <th>Category</th>
                <th>Author</th>
                <th>Ratings</th>
            </tr>
            </thead>
            {books.map(book =>
            <tbody>
                <td>{book.book_name}</td>
                <td>{book.category}</td>
                <td>{book.author}</td>
                <td>{book.rating}</td>
            </tbody>
            )}
        </Table>
    )
}

export default Lists;