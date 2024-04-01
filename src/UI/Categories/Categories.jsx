import React, { useState } from 'react'
import { categories } from '../../Data/categories'
import styles from './Categories.module.css'

export default function Categories({ ChangeCurrent }) {
	const [selectedCategory, setSelectedCategory] = useState('all')
	function handleCategoryClick(key) {
		setSelectedCategory(key)
		ChangeCurrent(key)
	}
	return (
		<div>
			<ul>
				{categories.map(item => (
					<li
						onClick={() => handleCategoryClick(item.key)}
						key={item.key}
						className={`${styles.item} ${
							selectedCategory === item.key ? styles.active : ''
						}`}
					>
						{item.name}
					</li>
				))}
			</ul>
		</div>
	)
}
