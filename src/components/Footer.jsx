const Footer = () => {
   return (
    <footer className="bg-gray-800 py-8 text-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-lg font-bold mb-4">Company</h3>
        <ul>
          <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4">Support</h3>
        <ul>
          <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Returns</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Shipping</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4">Legal</h3>
        <ul>
          <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Accessibility</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4">Let's Collab</h3>
        <ul>
          <li><a href="https://github.com/TheBenster" className="text-gray-400 hover:text-white">Github</a></li>
        </ul>
      </div>
    </div>
    <div className="mt-8 text-center text-gray-400">
      &copy; {new Date().getFullYear()} TheBenster Inc. All rights reserved.
    </div>
  </div>
</footer>)
}


export default Footer;