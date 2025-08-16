

const Header = () => {
    return (
        <header className="p-6  flex items-center justify-center text-white gap-4 border-b-2 border-yellow-500">
            <div className="w-30 h-20 relative">
                <img 
                src="/library.png" 
                alt="lithub logo"
                width={80}
                height={80}
                className="rounded-full object-cover"
                />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-wide">LitHub</h1>  
           
        </header>
    )
}
export default Header;