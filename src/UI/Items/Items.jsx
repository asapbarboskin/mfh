import React from 'react'
import { items } from '../../Data/items.jsx'
import Item from './Item.jsx'
import styles from './Items.module.css'
import UseOrders from '../../Utils/UseOrders.jsx'

export default function Items() {
	const { AddToCheckout } = UseOrders(); 
	return (
		<div className={styles.Items}>
			{items.map(el => (
				<Item className={styles.Item} key={el.id} item={el} AddToCheckout={AddToCheckout}/>
			))}
		</div>
		
	)
}
