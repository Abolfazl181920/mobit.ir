import { 
    SearchIcon, UserIcon, ShoppingCart, SalerworkIcon,
    ArticlesnewsIcon, AmazingofferIcon, CategoryIcon,
} from '../../assets/icons'

const Header = () => {
  return (
    <div className='h-20 flex w-full bg-red-700'>
        <div>
            <CategoryIcon />
            <AmazingofferIcon />
            <ArticlesnewsIcon />
            <SalerworkIcon />
            <SearchIcon />
            <input type="text" placeholder='test' name='test' />
        </div>
        <div>
            <UserIcon />
            <ShoppingCart />
        </div>
    </div>
  )
}

export default Header