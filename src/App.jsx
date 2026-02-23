import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {
    return (
        <div className='main-view'>
            <h1>
                Lit 🔥
            </h1>
            <SearchBar/>
        </div>
    )
}
export default App