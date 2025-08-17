const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div>
            <h4 className="text-white font-semibold mb-3">About LitHub</h4>
            <p className="text-gray-400 text-sm">
              LitHub is your daily source for literary news, book recommendations, and thoughtful essays from around the literary world.
            </p>
          </div>

         
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Books</a></li>
              <li><a href="#" className="hover:text-white">Membership</a></li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-white font-semibold mb-3">Connect with Us</h4>
            <div className="flex space-x-4 ">
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-500 pt-4 pb-6 text-center text-white-500 text-sm">
          &copy; {new Date().getFullYear()} LitHub. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer;
