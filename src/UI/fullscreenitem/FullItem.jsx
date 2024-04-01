import styles from './FullItem.module.css'
export default function FullItem({ item, AddToCheckout, HandleShowFullItem }) {
	const { title, img, desc, material, price } = item
	console.log(title)
	return (
		<div className={styles.overlay}>
			<div className={styles['full-item']}>
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
		</div>
	)
}
