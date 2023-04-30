import { useState, useEffect } from 'react'
import { ScrollTopIcon } from '../../assets/icons'

const ScrollTopButton = () => {

	const [ isVisible, setIsVisible ] = useState<boolean>(false)

	const handleScroll = () => {
		if (window.pageXOffset > 100) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<div className={`scrollTop flex justify-center mt-8 ${isVisible ? 'show' : ''}`} onClick={handleClick}>
			<span>
				<ScrollTopIcon />
				<button className="font-extralight cursor-pointer text-sm text-gray-600">بازگشت به بالا</button>
			</span>
		</div>
	)
}

export default ScrollTopButton