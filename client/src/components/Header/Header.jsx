import { 
    SearchIcon, UserIcon, ShoppingCart, SalerworkIcon,
    ArticlesnewsIcon, AmazingofferIcon, CategoryIcon,
} from '../../assets/icons'

const Header = () => {
  return (
    <div className='h-14 flex-row-reverse flex w-full bg-blue-700'>
        {/* <div> */}
            <CategoryIcon />
            {/* <AmazingofferIcon />
            <ArticlesnewsIcon />
            <SalerworkIcon />
            <SearchIcon /> */}
        {/* </div> */}
        <div>
            <UserIcon />
            <ShoppingCart />
        </div>
    </div>
  )
}

export default Header