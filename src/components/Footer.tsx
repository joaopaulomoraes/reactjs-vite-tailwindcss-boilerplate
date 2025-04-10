import { Link } from 'react-router-dom'

function Footer() {
  const links = {
    about: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Careers', path: '/careers' }
    ],
    rentals: [
      { name: 'Browse Cars', path: '/cars' },
      { name: 'Locations', path: '/locations' },
      { name: 'How it Works', path: '/how-it-works' }
    ],
    help: [
      { name: 'FAQs', path: '/faq' },
      { name: 'Terms & Conditions', path: '/terms' },
      { name: 'Privacy Policy', path: '/privacy' }
    ]
  }

  const socialLinks = [
    { name: 'Facebook', icon: '📘', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'Instagram', icon: '📸', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' }
  ]

  const contactInfo = {
    phone: '+1 (555) 123-4567',
    email: 'support@carental.com',
    address: '123 Car Street, Auto City, AC 12345'
  }

  return (
    <footer className="bg-[#222831]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#00ADB5]">CarRental</h3>
            <p className="text-sm leading-relaxed text-[#EEEEEE]">
              Your premium car rental solution. Experience the perfect blend of
              comfort, style, and reliability with our extensive fleet of
              vehicles.
            </p>
            <div className="space-y-2">
              <p className="flex items-center text-sm text-[#EEEEEE]">
                <span className="mr-2">📞</span> {contactInfo.phone}
              </p>
              <p className="flex items-center text-sm text-[#EEEEEE]">
                <span className="mr-2">✉️</span> {contactInfo.email}
              </p>
              <p className="flex items-center text-sm text-[#EEEEEE]">
                <span className="mr-2">📍</span> {contactInfo.address}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="mb-4 text-lg font-semibold capitalize text-[#00ADB5]">
                {category}
              </h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-sm text-[#EEEEEE] transition-colors hover:text-[#00ADB5]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 border-t border-[#393E46] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="rounded-full bg-[#393E46] p-2 text-[#EEEEEE] transition-all hover:scale-110 hover:bg-[#00ADB5]"
                  aria-label={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>

            <p className="text-center text-sm text-[#EEEEEE]">
              © {new Date().getFullYear()} CarRental. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
