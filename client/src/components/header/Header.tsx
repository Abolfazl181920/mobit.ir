import { 
    SearchIcon, UserIcon, ShoppingCart, SalerworkIcon,
    ArticlesnewsIcon, AmazingofferIcon, CategoryIcon,
} from '../../assets/icons'

const Header = () => {
  return (
    <header className='h-14 flex flex-row-reverse justify-center w-full bg-gradient-to-r from-blue-800 to-transparent to-40% bg-blue-700'>
        <div className='flex relative left-[14rem] mt-[1.2rem]'>
			{/* <SearchIcon /> */}
			<span className='flex text-[10px] text-white'>
				<span className='mr-2'>
					همکار و قیمت عمده
				</span>
				<SalerworkIcon />
			</span>

			<span className='flex text-[10px] text-white'>
				<span className='mr-2'>
					اخبار و مقالات روز
				</span>
				<ArticlesnewsIcon />
			</span>

			<span className='flex text-[10px] text-white'>
				<span className='mr-2'>
					پیشنهادهای شگفت انگیز
				</span>
				<AmazingofferIcon />
			</span>

			<span className='flex text-[10px] text-white'>
				<span className='mr-2'>
					دسته بندی
				</span>
				<CategoryIcon />
			</span>
		</div>

		<div className='flex relative text-[10px] right-[17rem] mt-[1.2rem] text-white'>
			<span className='flex'>
				<span className='mr-2'>
					سبد خرید
				</span>
				<ShoppingCart />
			</span>
			<span className='flex'>
				<span className='mr-2'>
					ورود/ ثبت نام
				</span>
				<UserIcon />
			</span>
		</div>
    </header>
  )
}

export default Header