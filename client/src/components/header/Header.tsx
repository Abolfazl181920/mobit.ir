import { 
    SearchIcon, UserIcon, ShoppingCart, SalerworkIcon,
    ArticlesnewsIcon, AmazingofferIcon, CategoryIcon,
} from '../../assets/icons'

const Header = () => {
  return (
    <header className='h-14 flex flex-row-reverse justify-center w-full bg-blue-700'>
        <div className='flex relative left-[27rem] mt-[1.2rem]'>
			<SearchIcon />
			<SalerworkIcon />
			<ArticlesnewsIcon />
			<AmazingofferIcon />
			<CategoryIcon />
		</div>
		<div className='flex relative right-[27rem] mt-[1.2rem]'>
			<ShoppingCart />
			<UserIcon />
		</div>
    </header>
  )
}

export default Header