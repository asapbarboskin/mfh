import React, { useState } from 'react'
import Categories from '../UI/Categories/Categories.jsx'
import Footer from '../UI/Footer/Footer.jsx'
import Header from '../UI/Header/Header.jsx'
import Items from '../UI/Items/Items.jsx'

function App() {
	const [current, setCurrent] = useState([])

	return (
		<div className='wrapper'>
			<Header />
			<Categories />
			<Items />
			<Footer />
		</div>
	)
}

export default App
