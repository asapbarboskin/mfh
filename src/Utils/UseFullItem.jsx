import { useState } from 'react'

export default function UseFullItem() {
	const [showFullItem, setShowFullItem] = useState(false)
	const [fullItem, setFullItem] = useState()

	const HandleShowFullItem = item => {
		setShowFullItem(prev => !prev)
		setFullItem(item)
	}
	return { showFullItem, HandleShowFullItem, fullItem }
}
