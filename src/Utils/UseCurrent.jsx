import { useState } from 'react'
import { items } from '../Data/items'

export default function UseCurrent() {
	const [current, setCurrent] = useState(items)
	function ChangeCurrent(key) {
		if (key !== 'all') {
			const updatedCurrent = items.filter(item => item.name === key)
			setCurrent(updatedCurrent)
		} else {
			setCurrent(items)
		}
	}
	return { current, ChangeCurrent }
}
