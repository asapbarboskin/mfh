import { useState } from 'react'
import { items } from '../data/items'

export default function UseCurrent() {
	const [current, setCurrent] = useState(items)
	const ChangeCurrent = key => {
		if (key !== 'all') {
			const updatedCurrent = items.filter(item => item.name === key)
			setCurrent(updatedCurrent)
		} else {
			setCurrent(items)
		}
	}
	return { current, ChangeCurrent }
}
