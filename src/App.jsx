import { useState } from 'react'
import SearchBar from './components/SearchBar'

export default function App() {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center">
            <main className="w-full flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold mb-6">Lit🔥</h1>
                <SearchBar />
            </main>
        </div>
    )
}