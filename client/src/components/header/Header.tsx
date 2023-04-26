import { 
    UserIcon, ShoppingCart, SalerworkIcon,
    ArticlesnewsIcon, AmazingofferIcon, CategoryIcon,
} from '../../assets/icons'
import SearchInput from './SearchInput'

const Header = () => {
  return (
    <header className='h-14 flex flex-row-reverse justify-center w-full bg-gradient-to-r from-blue-800 to-transparent to-40% bg-blue-700'>
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

			<span className='headeritem'>
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
    </header>
  )
}

export default Header