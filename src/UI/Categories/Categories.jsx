import React from 'react'
import { categories } from '../../Data/categories'
import styles from './Categories.module.css'

export default function Categories() {
	return (
		<div>
			<ul>
				{categories.map(item => (
					<li key={item.key} className={styles.item}>
						{item.name}
					</li>
				))}
			</ul>
		</div>
	)
}
