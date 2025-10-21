const Footer = () => {
   return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-sky-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-200 hover:translate-x-1 inline-block">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-200 hover:translate-x-1 inline-block">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-200 hover:translate-x-1 inline-block">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-200 hover:translate-x-1 inline-block">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-200 hover:translate-x-1 inline-block">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-200 hover:translate-x-1 inline-block">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-200 hover:translate-x-1 inline-block">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-200 hover:translate-x-1 inline-block">Shipping</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-200 hover:translate-x-1 inline-block">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-200 hover:translate-x-1 inline-block">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-200 hover:translate-x-1 inline-block">Accessibility</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/TheBenster"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-sky-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Hex Store. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with ❤️ by{" "}
              <a
                href="https://github.com/TheBenster"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 transition-colors duration-200"
              >
                TheBenster
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer;