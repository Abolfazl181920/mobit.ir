import { 
    SearchIcon, UserIcon, ShoppingCart, SalerworkIcon,
    ArticlesnewsIcon, AmazingofferIcon, CategoryIcon,
} from '../../assets/icons'

const Header = () => {
  return (
    <header className='h-14 flex flex-row-reverse justify-center w-full bg-gradient-to-r from-blue-800 to-transparent to-40% bg-blue-700'>
        <div className='flex relative font-bold left-[2rem] mt-[1.2rem]'>
			
			<form className="flex items-center -mt-5 relative right-[3.5rem]">   
    			<label htmlFor="simple-search" className="sr-only">جستجو در مبیت</label>
			<div className="relative">
				<div className="absolute inset-y-0 left-36 flex items-center pl-52 py-[2.66rem] pointer-events-none">
					<SearchIcon />
				</div>
				<input type="text" id="simple-search" className="bg-gradient-to-t from-cyan-100 h-9 w-96 to-blue-100 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-56 mt-1.5" placeholder="جستجو در مبیت" required />
			</div>
		</form>
			<span className='flex text-[10px] text-white'>
				<span className='mr-3 mt-[.15rem]'>
					همکار و قیمت عمده
				</span>
				<SalerworkIcon />
			</span>

			<span className='flex text-[10px] text-white'>
				<span className='mr-3 mt-[.15rem]'>
					اخبار و مقالات روز
				</span>
				<ArticlesnewsIcon />
			</span>

			<span className='flex text-[10px] text-white'>
				<span className='mr-3 mt-[.15rem]'>
					پیشنهادهای شگفت انگیز
				</span>
				<AmazingofferIcon />
			</span>

			<span className='flex text-[10px] text-white'>
				<span className='mr-3 mt-[.15rem]'>
					دسته بندی
				</span>
				<CategoryIcon />
			</span>
		</div>

		<div className='flex relative text-[10px] right-[4rem] mt-[1.2rem] text-white'>
			<span className='flex'>
				<span className='mr-3 mt-[.15rem]'>
					سبد خرید
				</span>
				<ShoppingCart />
			</span>
			<span className='flex'>
				<span className='mr-3 mt-[.15rem]'>
					ورود/ ثبت نام
				</span>
				<UserIcon />
			</span>
		</div>
    </header>
  )
}

export default Header