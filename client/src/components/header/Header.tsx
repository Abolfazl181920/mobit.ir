import { 
    SearchIcon, UserIcon, ShoppingCart, SalerworkIcon,
    ArticlesnewsIcon, AmazingofferIcon, CategoryIcon,
} from '../../assets/icons'
import SearchInput from './SearchInput'

const Header = () => {
  return (
    <header className='h-14 flex flex-row-reverse justify-center w-full bg-gradient-to-r from-blue-800 to-transparent to-40% bg-blue-700'>
        <div className='flex relative font-bold left-[2rem] mt-[1.2rem]'>	
		<SearchInput />
			<span className='flex text-[10px] text-white'>
				<span className='mr-3 mt-[.15rem] cursor-pointer'>
					همکار و قیمت عمده
				</span>
				<SalerworkIcon />
			</span>

			<span className='flex text-[10px] text-white'>
				<span className='mr-3 mt-[.15rem] cursor-pointer'>
					اخبار و مقالات روز
				</span>
				<ArticlesnewsIcon />
			</span>

			<span className='flex text-[10px] text-white'>
				<span className='mr-3 mt-[.15rem] cursor-pointer'>
					پیشنهادهای شگفت انگیز
				</span>
				<AmazingofferIcon />
			</span>

			<span className='flex text-[10px] text-white'>
				<span className='mr-3 mt-[.15rem] cursor-pointer'>
					دسته بندی
				</span>
				<CategoryIcon />
			</span>
		</div>

		<div className='flex relative text-[10px] right-[4rem] mt-[1.2rem] text-white'>
			<span className='flex'>
				<span className='mr-3 mt-[.15rem] cursor-pointer'>
					سبد خرید
				</span>
				<ShoppingCart />
			</span>
			<span className='flex'>
				<span className='mr-3 mt-[.15rem] cursor-pointer'>
					ورود/ ثبت نام
				</span>
				<UserIcon />
			</span>
		</div>
    </header>
  )
}

export default Header