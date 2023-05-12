import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Salwar_Suit from './Salwar_Suit'

export default function Reactrouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Salwar_Suit />} />

            </Routes>
        </BrowserRouter>
    )
}
