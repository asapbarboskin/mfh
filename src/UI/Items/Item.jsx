import React from 'react'
import styles from './Item.module.css'

export default function Item({ item, AddToCheckout, HandleShowFullItem }) {
	const { title, img, desc, material, price } = item

	return (
		<div className={styles.Item}>
			<div
				className={styles['img-container']}
				onClick={() => HandleShowFullItem(item)}
			>
				<img className={styles.img} src={'/assets/' + img} alt='' />
				<div className={styles['text-overlay']}>
					<p>{desc}</p>
					<p>{material}</p>
				</div>
			</div>
			<h2>{title}</h2>
			<b>${price}</b>
			<div onClick={() => AddToCheckout(item)} className={styles.addToCart}>
				+
			</div>
		</div>
	)
}
