import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { createBookshelf, getBookshelf, getBookshelves } from '../../store/bookshelves';
import Books from '../Books';


const BookshelvesSidebar = ({ bookshelves }) => {
    const dispatch = useDispatch();

    const [name, setName] = useState("")
    const [errors, setErrors] = useState([]);

    // const handleUpdate = async (e) => {
    //     setNewBookshelf({ ...newBookshelf, [e.target.name]: e.target.value })
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let newBookshelf = {
            name: name
        }

        try {
            let createdBookshelf = await dispatch(createBookshelf(newBookshelf));
            if (createdBookshelf) {
                await dispatch(getBookshelves());
                setName("");
            }
        }
        catch (response) {
            const data = await response.json();
            if (data && data.errors) setErrors(data.errors);
        }
    }

    return (
        <div className='bookshelf-sidebar-container'>
            <div className='bookshelves-header'>
                Bookshelves
            </div>
            <div>
                {bookshelves.map(bookshelf => (
                    <>
                        <NavLink key={`bookshelf-${bookshelf.id}`} to={`/shelf/${bookshelf.id}`}>
                            {bookshelf.name}
                        </NavLink>
                        <br></br>
                    </>
                ))}
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder='Add new bookshelf'
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}>
                    </input>
                    <button>Add</button>
                </form>
            </div>
        </div>
    )
}

export default BookshelvesSidebar