import {useState} from 'react';
import './searchbar.css';

function SearchBar({onSubmit}) {

 const [term,setTerm] = useState('');

 const handleFormSubmit = (event)=>{
    event.preventDefault();
     onSubmit(term);
 }

 const handleChange = (event)=>{
    setTerm(event.target.value)
 }   
  return <div className='search-bar'>
    <form onSubmit={handleFormSubmit}>
        <labe  >enter search term</labe>
        <input value={term} onChange={handleChange} type="text" />
    </form>

    </div>;
}
export default SearchBar;
