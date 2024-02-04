const Footer = () => {
  return (
    <footer className="w-screen bg-black text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* Categories */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
            <h3 className="text-lg font-bold mb-2">Categories</h3>
            <ul>
              <li>Action</li>
              <li>Comedy</li>
              <li>Drama</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              {/* Add more social media links as needed */}
            </ul>
          </div>

          {/* Legal */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
            <h3 className="text-lg font-bold mb-2">Legal</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <ul>
              <li>
                Email:{" "}
                <a
                  href="mailto:anujthakur0103@gmail.com"
                  className="hover:underline"
                >
                  anujthakur0103@gmail.com
                </a>
              </li>
              <li>Phone: +91 92xxx-xxx99</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p>&copy; 2024 Netflix Clone with Chat GPT. By Anuj Thakur</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
