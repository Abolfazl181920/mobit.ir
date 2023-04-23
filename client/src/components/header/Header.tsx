import { 
    SearchIcon, UserIcon, ShoppingCart, SalerworkIcon,
    ArticlesnewsIcon, AmazingofferIcon, CategoryIcon,
} from '../../assets/icons'

const Header = () => {
  return (
    <div className='h-14 flex flex-row justify-center w-full bg-blue-700'>
        <CategoryIcon />
        <AmazingofferIcon />
        <ArticlesnewsIcon />
        <SalerworkIcon />
        <SearchIcon />
        <UserIcon />
        <ShoppingCart />
    </div>
  )
}

export default Header