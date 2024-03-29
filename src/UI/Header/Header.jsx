import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import UseOrders from '../../Utils/UseOrders.jsx'
import ShowNothing from '../Orders/ShowNothing.jsx'
import ShowOrders from '../Orders/ShowOrders.jsx'
import styles from './Header.module.css'
export default function Header() {
	let { orders } = UseOrders()
	let [cartOpen, setCartOpen] = useState(false)
	const handleCartClick = () => {
		setCartOpen(prevCartOpen => !prevCartOpen)
	}
	return (
		<header>
			<div className={styles.header}>
				<a href=''>
					<span className={styles.logo}>My Furniture Hub</span>
				</a>
				<ul className={styles.navigation}>
					<li>About us</li>
					<li>Contacts</li>
					<li>Account</li>
				</ul>
				<FaShoppingCart
					onClick={handleCartClick}
					className={
						cartOpen
							? `${styles['shop-cart-button']} ${styles['active']}`
							: styles['shop-cart-button']
					}
				/>
				<div
					className={
						cartOpen
							? `${styles[`overlay`]} ${styles[`animated`]} ${styles[`show`]}`
							: `${styles[`overlay`]} ${styles[`animated`]}`
					}
				>
					<div className={styles['shop-cart']}>
						{orders.length > 0 ? <ShowOrders /> : <ShowNothing />}
					</div>
				</div>
			</div>
			<div className={styles.presentation}></div>
		</header>
	)
}
