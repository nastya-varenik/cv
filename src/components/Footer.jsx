const Footer = () => {
    return (
      <footer className="bg-pink-200 text-gray-800 py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>© 2023 Анастасия</p>
          <a
            href="/public/resume.pdf"
            download
            className="bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-pink-500 transition duration-300"
          >
            Скачать PDF
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;