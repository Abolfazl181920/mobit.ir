import { SearchIcon } from "../../assets/icons"

const SearchInput = () => {
  return (
    <form className="flex items-center -mt-5 relative right-[3.5rem]">   
    	<label htmlFor="simple-search" className="sr-only">جستجو در مبیت</label>
		<div className="relative">
			<div className="absolute inset-y-0 left-36 flex items-center pl-52 py-[2.66rem] pointer-events-none">
				<SearchIcon />
			</div>
			<input type="text" id="simple-search" className="bg-gradient-to-t from-cyan-100 h-9 w-96 to-blue-100 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-56 mt-1.5" placeholder="جستجو در مبیت" required />
		</div>
	</form>
  )
}

export default SearchInput