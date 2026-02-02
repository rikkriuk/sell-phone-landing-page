const Footer = () => {
   const year = new Date().getFullYear();
   const githubUrl = "https://github.com/rikkriuk";

   return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col">
          <p className="text-gray-400">
            © {year} ARF PART. Layanan jual beli HP bekas dan rusak terpercaya. 
         </p>

         <p className="text-gray-400">
            Dikembangkan oleh  
            <a 
               href={githubUrl} 
               target="_blank" 
               rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                {" "} @rikkriuk
            </a>
         </p>
        </div>
      </footer>
   )
}

export default Footer;