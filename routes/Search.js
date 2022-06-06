import React from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Search = (props) => {
	return (
		<div className='search'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input>
		</div>
	);
};

export default Search;