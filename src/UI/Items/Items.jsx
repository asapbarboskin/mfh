import React from 'react'
import Item from './Item.jsx'
import styles from './Items.module.css'

export default function Items({ current, AddToCheckout, HandleShowFullItem }) {
	return (
		<div className={styles.Items}>
			{current.map(el => (
				<Item
					className={styles.Item}
					key={el.id}
					item={el}
					AddToCheckout={AddToCheckout}
					HandleShowFullItem={HandleShowFullItem}
				/>
			))}
		</div>
	)
}
