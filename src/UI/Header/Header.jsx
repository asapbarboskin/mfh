import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import ShowNothing from '../Orders/ShowNothing.jsx'
import ShowOrders from '../Orders/ShowOrders.jsx'
import styles from './Header.module.css'

export default function Header({ orders, DeleteOrder }) {
	let [cartOpen, setCartOpen] = useState(false)

	const handleCartClick = () => {
		setCartOpen(prevCartOpen => !prevCartOpen)
	}

	return (
		<header>
			<div className={styles.header}>
				<Logo />
				<Navigation />
				<CartIcon onClick={handleCartClick} isActive={cartOpen} />
				<CartOverlay
					isActive={cartOpen}
					orders={orders}
					DeleteOrder={DeleteOrder}
				/>
			</div>
			<div className={styles.presentation}></div>
		</header>
	)
}

// Logo Component
const Logo = () => (
	<a href=''>
		<span className={styles.logo}>My Furniture Hub</span>
	</a>
)

// Navigation Component
const Navigation = () => (
	<ul className={styles.navigation}>
		<li>About us</li>
		<li>Contacts</li>
		<li>Account</li>
	</ul>
)

// CartIcon Component
const CartIcon = ({ onClick, isActive }) => (
	<FaShoppingCart
		onClick={onClick}
		className={
			isActive
				? `${styles['shop-cart-button']} ${styles['active']}`
				: styles['shop-cart-button']
		}
	/>
)

// CartOverlay Component
const CartOverlay = ({ isActive, orders, DeleteOrder }) => (
	<div
		className={
			isActive
				? `${styles[`overlay`]} ${styles[`animated`]} ${styles[`show`]}`
				: `${styles[`overlay`]} ${styles[`animated`]}`
		}
	>
		<div className={styles['shop-cart']}>
			{orders.length > 0 ? (
				<ShowOrders orders={orders} DeleteOrder={DeleteOrder} />
			) : (
				<ShowNothing />
			)}
		</div>
	</div>
)
