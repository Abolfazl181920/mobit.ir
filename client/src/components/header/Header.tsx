import { useState } from 'react'
import Modal from '../nav/subnav/Modal'
import { 
    UserIcon, ShoppingCart, SalerworkIcon,
    ArticlesnewsIcon, AmazingofferIcon, CategoryIcon,
} from '../../assets/icons'
import SearchInput from './SearchInput'
import './header.css'

const Header = () => {

	const [ openModal, setOpenModal ] = useState<boolean>(true)

	const showModal = (): void => setOpenModal(true)
	const closeModal = (): void => setOpenModal(false)

	return (
		<header className='h-14 flex flex-nowrap flex-row-reverse justify-center w-full bg-gradient-to-r from-blue-800 to-transparent to-40% bg-blue-700'>
			<div className='flex relative font-bold left-[2rem] mt-[1.2rem]'>	
			<SearchInput />
				<span className='headeritem'>
					<span className='iconitem hover-underline-animation'>
						همکار و قیمت عمده
					</span>
					<SalerworkIcon />
				</span>

				<span className='headeritem'>
					<span className='iconitem hover-underline-animation'>
						اخبار و مقالات روز
					</span>
					<ArticlesnewsIcon />
				</span>

				<span className='headeritem'>
					<span className='iconitem hover-underline-animation'>
						پیشنهادهای شگفت انگیز
					</span>
					<AmazingofferIcon />
				</span>

				<span onMouseEnter={showModal} onMouseLeave={closeModal} className='headeritem'>
					<span className='iconitem hover-underline-animation'>
						دسته بندی
					</span>
					<CategoryIcon />
				</span>
			</div>

			<div className='headeritem relative right-[4rem] mt-[1.2rem]'>
				<span className='flex'>
					<span className='iconitem hover-underline-animation'>
						سبد خرید
					</span>
					<ShoppingCart />
				</span>
				<span className='flex'>
					<span className='iconitem hover-underline-animation'>
						ورود/ ثبت نام
					</span>
					<UserIcon />
				</span>
			</div>

			{
				openModal && <Modal />
			}
		</header>
	)
}

export default Header