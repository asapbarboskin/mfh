import React from 'react'
import { items } from '../../Data/items.jsx'
import Item from './Item.jsx'
import styles from './Items.module.css'

export default function Items() {
	return (
		<div className={styles.Items}>
			{items.map(el => (
				<Item className={styles.Item} key={el.id} item={el} />
			))}
		</div>
	)
}
