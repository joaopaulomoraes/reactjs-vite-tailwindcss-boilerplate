import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Booking from '../pages/Booking'
import Cars from '../pages/Cars'
import Navbar from './Navbar'
import Footer from './Footer'
import { Users, Car, MapPin, HeadphonesIcon } from 'lucide-react'
import { useState, useEffect } from 'react'

function HomePage() {
  const popularCars = [
    {
      id: '1',
      name: 'Tesla Model 3',
      category: 'Electric',
      price: '89',
      image:
        'https://images.unsplash.com/photo-1617788138017-80ad40cc4102?w=800&auto=format&fit=crop&q=60',
      specs: {
        seats: '5',
        transmission: 'Automatic',
        fuelType: 'Electric',
        range: '350 km'
      },
      features: ['Autopilot', 'Wireless Charging', 'Premium Sound']
    },
    {
      id: '2',
      name: 'BMW X5',
      category: 'SUV',
      price: '129',
      image:
        'https://images.unsplash.com/photo-1619362280286-f1f8fd5032ed?w=800&auto=format&fit=crop&q=60',
      specs: {
        seats: '7',
        transmission: 'Automatic',
        fuelType: 'Hybrid',
        range: '700 km'
      },
      features: ['Panoramic Roof', 'Lane Assist', 'Premium Audio']
    },
    {
      id: '3',
      name: 'Mercedes C-Class',
      category: 'Luxury',
      price: '149',
      image:
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=60',
      specs: {
        seats: '5',
        transmission: 'Automatic',
        fuelType: 'Petrol',
        range: '600 km'
      },
      features: ['Leather Seats', 'Ambient Lighting', 'Navigation']
    }
  ]

  const features = [
    {
      title: 'Affordable Rates',
      description:
        'Get the best deals with our competitive pricing and special discounts for long-term rentals.',
      icon: '💰',
      stats: '20% cheaper'
    },
    {
      title: '24/7 Support',
      description:
        'Our dedicated team is available around the clock to assist you with any queries.',
      icon: '🕒',
      stats: '5min response'
    },
    {
      title: 'Wide Selection',
      description:
        'Choose from our extensive fleet of vehicles ranging from economy to luxury cars.',
      icon: '🚗',
      stats: '100+ models'
    },
    {
      title: 'Easy Booking',
      description:
        'Simple online booking process with instant confirmation and flexible modifications.',
      icon: '📱',
      stats: '2-step process'
    }
  ]

  const testimonials = [
    {
      name: 'John Doe',
      title: 'Business Owner',
      comment:
        'Best rental experience ever! The car was immaculate and the service was exceptional. Will definitely use again.',
      rating: 5,
      image: 'https://i.pravatar.cc/100?img=1',
      date: '2024-02-15',
      carRented: 'Tesla Model 3',
      verified: true
    },
    {
      name: 'Sarah Smith',
      title: 'Travel Blogger',
      comment:
        'Great service and amazing cars. The staff went above and beyond to ensure everything was perfect. Highly recommended!',
      rating: 5,
      image: 'https://i.pravatar.cc/100?img=2',
      date: '2024-02-10',
      carRented: 'BMW X5',
      verified: true
    },
    {
      name: 'Mike Johnson',
      title: 'Software Engineer',
      comment:
        'Smooth booking process and excellent support. The car was exactly what I needed for my business trip.',
      rating: 4,
      image: 'https://i.pravatar.cc/100?img=3',
      date: '2024-02-05',
      carRented: 'Mercedes C-Class',
      verified: true
    }
  ]

  const specialOffers = [
    {
      title: 'Weekend Special',
      description: 'Get 20% off on weekend rentals',
      code: 'WEEKEND20',
      validUntil: '2024-12-31',
      discount: '20%',
      conditions: [
        'Valid Friday to Sunday',
        'All car categories',
        '2-day minimum'
      ],
      icon: '🌟'
    },
    {
      title: 'Long Term Rental',
      description: 'Up to 30% off on monthly bookings',
      code: 'MONTHLY30',
      validUntil: '2024-12-31',
      discount: '30%',
      conditions: ['30+ days rental', 'Free maintenance', 'Flexible pickup'],
      icon: '📅'
    }
  ]

  const stats = [
    {
      number: '15k+',
      label: 'Happy Customers',
      icon: <Users className="size-8 stroke-[1.5]" />,
      description: 'Satisfied clients who trust us'
    },
    {
      number: '100+',
      label: 'Cars Available',
      icon: <Car className="size-8 stroke-[1.5]" />,
      description: 'Wide range of vehicles'
    },
    {
      number: '25+',
      label: 'Pickup Locations',
      icon: <MapPin className="size-8 stroke-[1.5]" />,
      description: 'Convenient pickup points'
    },
    {
      number: '24/7',
      label: 'Customer Support',
      icon: <HeadphonesIcon className="size-8 stroke-[1.5]" />,
      description: 'Always here to help'
    }
  ]

  const locations = [
    {
      name: 'Downtown Office',
      address: '123 Main St, City Center',
      phone: '(555) 123-4567',
      email: 'downtown@carrental.com',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60',
      hours: '24/7',
      features: ['Airport Shuttle', 'Car Wash', 'EV Charging'],
      coordinates: { lat: '40.7128° N', lng: '74.0060° W' }
    },
    {
      name: 'Airport Terminal',
      address: 'Terminal 2, International Airport',
      phone: '(555) 123-4568',
      email: 'airport@carrental.com',
      image:
        'https://images.unsplash.com/photo-1605099163473-5890dc24089c?w=800&auto=format&fit=crop&q=60',
      hours: '24/7',
      features: ['Quick Pickup', 'Return Service', 'Flight Tracking'],
      coordinates: { lat: '40.6413° N', lng: '73.7781° W' }
    }
  ]

  const howItWorks = [
    {
      step: '1',
      title: 'Choose Your Car',
      icon: '🚗',
      description:
        'Browse our wide selection of vehicles and pick your perfect ride.',
      features: ['Compare Models', 'View Specifications', 'Check Availability']
    },
    {
      step: '2',
      title: 'Make a Booking',
      icon: '📅',
      description:
        'Select your dates and complete the booking process securely.',
      features: ['Instant Confirmation', 'Flexible Dates', 'Secure Payment']
    },
    {
      step: '3',
      title: 'Enjoy Your Ride',
      icon: '🔑',
      description: 'Pick up your car and start your journey with confidence.',
      features: ['Quick Pickup', '24/7 Support', 'Full Insurance']
    }
  ]

  // Generate a random description
  const generateDescription = (type: string) => {
    const adjectives = [
      'Magnificent',
      'Incredible',
      'Enchanting',
      'Vibrant',
      'Royal',
      'Spiritual'
    ]
    const experiences = [
      'Paradise',
      'Heritage',
      'Wonder',
      'Destination',
      'Experience',
      'Journey'
    ]

    return `${
      adjectives[Math.floor(Math.random() * adjectives.length)]
    } ${type} ${experiences[Math.floor(Math.random() * experiences.length)]}`
  }

  // Dynamic destinations generator
  const generateDestinations = () => {
    const destinationTypes = [
      {
        name: 'Beach',
        locations: ['Goa', 'Kovalam', 'Andaman', 'Varkala', 'Pondicherry'],
        images: [
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
          'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800',
          'https://images.unsplash.com/photo-1544939514-aa98d908bc4c?w=800'
        ]
      },
      {
        name: 'Palace',
        locations: ['Udaipur', 'Jaipur', 'Mysore', 'Jodhpur', 'Hyderabad'],
        images: [
          'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800',
          'https://images.unsplash.com/photo-1599661046251-bce15f25c236?w=800',
          'https://images.unsplash.com/photo-1548013146-72479768bada?w=800'
        ]
      },
      {
        name: 'Mountain',
        locations: ['Manali', 'Shimla', 'Darjeeling', 'Gangtok', 'Ooty'],
        images: [
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
          'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800'
        ]
      },
      {
        name: 'Temple',
        locations: ['Varanasi', 'Madurai', 'Amritsar', 'Tirupati', 'Hampi'],
        images: [
          'https://images.unsplash.com/photo-1545066838-83e5f8846359?w=800',
          'https://images.unsplash.com/photo-1545066836-fb129b27e8bd?w=800',
          'https://images.unsplash.com/photo-1545066837-f26d86b74e24?w=800'
        ]
      },
      {
        name: 'City',
        locations: ['Delhi', 'Mumbai', 'Bangalore', 'Kolkata', 'Chennai'],
        images: [
          'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
          'https://images.unsplash.com/photo-1542644384-49f9bebd3448?w=800',
          'https://images.unsplash.com/photo-1615633744757-5baa0f7020f9?w=800'
        ]
      }
    ]

    return destinationTypes
      .map((type) => {
        const randomLocation =
          type.locations[Math.floor(Math.random() * type.locations.length)]
        const randomImage =
          type.images[Math.floor(Math.random() * type.images.length)]

        return {
          name: `${randomLocation} ${type.name}`,
          image: `${randomImage}&auto=format&fit=crop&q=60`,
          description: generateDescription(type.name)
        }
      })
      .sort(() => Math.random() - 0.5)
      .slice(0, 4)
  }

  // Replace allDestinations array and destinations state
  const [destinations, setDestinations] = useState(generateDestinations())
  const [currentDestIndex, setCurrentDestIndex] = useState(0)

  // Effect to rotate through destinations
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDestIndex((prev) => (prev + 1) % destinations.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [destinations])

  // Effect to refresh destinations every hour
  useEffect(() => {
    const refreshTimer = setInterval(() => {
      setDestinations(generateDestinations())
      setCurrentDestIndex(0)
    }, 60000) // Refresh every minute for more dynamism

    return () => clearInterval(refreshTimer)
  }, [])

  return (
    <div className="bg-gradient-to-b from-[#222831] via-[#393E46] to-[#222831]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden border-b-4 border-[#00ADB5]/30 bg-gradient-to-br from-[#EEEEEE] to-white py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute -left-20 top-0 size-72 rounded-full bg-[#00ADB5]/10 blur-3xl" />
          <div className="absolute -right-20 bottom-0 size-72 rounded-full bg-[#00ADB5]/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ADB5]/5 blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Content */}
            <div className="relative space-y-8">
              <div className="inline-block rounded-lg bg-[#00ADB5]/10 px-4 py-2 text-sm font-semibold text-[#00ADB5] backdrop-blur-sm">
                #1 Car Rental Service in Town
              </div>
              <h1 className="text-5xl font-bold leading-tight text-[#222831] md:text-6xl">
                Drive Your Dreams
                <span className="relative mt-2 block text-[#00ADB5]">
                  Premium Car Rental
                  <svg
                    className="absolute -right-4 -top-2 size-6 animate-ping text-[#00ADB5]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
              </h1>
              <p className="max-w-xl text-lg text-[#393E46]/80 md:text-xl">
                Experience luxury and comfort with our premium fleet. Easy
                booking, flexible rental options, and 24/7 support.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  to="/cars"
                  className="group flex items-center justify-center rounded-xl border-2 border-[#00ADB5] bg-[#00ADB5] px-8 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#393E46]"
                >
                  <span>Browse Fleet</span>
                  <svg
                    className="ml-2 size-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  to="/booking"
                  className="group flex items-center justify-center rounded-xl border-2 border-[#00ADB5] bg-transparent px-8 py-4 font-semibold text-[#00ADB5] transition-all hover:-translate-y-0.5 hover:bg-[#00ADB5] hover:text-white"
                >
                  Start Booking
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
                {[
                  { value: '100+', label: 'Premium Cars' },
                  { value: '50+', label: 'Locations' },
                  { value: '24/7', label: 'Support' },
                  { value: '4.9', label: 'Rating' }
                ].map((stat) => (
                  <div key={stat.label} className="relative">
                    <div className="relative z-10 rounded-xl border-2 border-[#00ADB5]/20 bg-white/80 p-4 text-center backdrop-blur-sm transition-all hover:border-[#00ADB5]/40">
                      <div className="text-2xl font-bold text-[#00ADB5]">
                        {stat.value}
                      </div>
                      <div className="text-sm text-[#393E46]/60">
                        {stat.label}
                      </div>
                    </div>
                    <div className="absolute inset-0 -z-10 translate-y-2 rounded-lg bg-[#00ADB5]/5 blur-lg" />
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden md:block">
              <div className="relative">
                <img
                  src={destinations[currentDestIndex].image}
                  alt={destinations[currentDestIndex].name}
                  className="h-[500px] w-full rounded-lg object-cover shadow-2xl transition-all duration-700"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-black/40 to-transparent" />

                {/* Destination Info */}
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="mb-2 text-3xl font-bold">
                    {destinations[currentDestIndex].name}
                  </h3>
                  <p className="text-lg text-white/80">
                    {destinations[currentDestIndex].description}
                  </p>
                </div>

                {/* Navigation Dots */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {destinations.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentDestIndex(index)}
                      className={`size-2.5 rounded-full transition-all duration-300 ${
                        index === currentDestIndex
                          ? 'scale-125 bg-white'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>

                <div className="absolute -bottom-6 -left-6 size-32 rounded-full bg-[#00ADB5]/10 blur-2xl" />
                <div className="absolute -right-6 -top-6 size-32 rounded-full bg-[#00ADB5]/10 blur-2xl" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -right-4 bottom-1/3 animate-bounce rounded-lg bg-white p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00ADB5]">
                    20% OFF
                  </div>
                  <div className="text-sm text-[#393E46]">First Booking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#EEEEEE] via-white to-[#EEEEEE] py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute -left-20 top-0 size-72 rounded-full bg-[#00ADB5]/10 blur-3xl" />
          <div className="absolute -right-20 bottom-0 size-72 rounded-full bg-[#00ADB5]/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ADB5]/5 blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="inline-block rounded-lg bg-[#00ADB5]/10 px-4 py-2 text-sm font-semibold text-[#00ADB5] backdrop-blur-sm">
              Our Impact
            </div>
            <h2 className="mt-4 text-4xl font-bold text-[#222831]">
              Numbers That Speak
            </h2>
            <div className="mx-auto mt-4 max-w-2xl text-[#393E46]/70">
              Our achievements and milestones reflect our commitment to
              providing exceptional car rental services
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative"
                style={{
                  animation: 'fadeInUp 0.5s ease-out forwards',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="relative overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative z-10">
                    <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-[#00ADB5] to-[#00ADB5]/80 text-white transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-lg">
                      {stat.icon}
                    </div>
                    <div className="mb-2 text-3xl font-bold text-[#00ADB5]">
                      {stat.number}
                    </div>
                    <div className="mb-2 text-lg font-semibold text-[#222831]">
                      {stat.label}
                    </div>
                    <div className="text-sm text-[#393E46]/70">
                      {stat.description}
                    </div>
                  </div>
                  <div className="group-hover:animate-shine absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-[#00ADB5]/10 to-transparent opacity-0 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>
          {`
            @keyframes shine {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>
      </section>

      {/* Popular Cars Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#EEEEEE] via-white to-[#EEEEEE] py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute -left-20 top-0 size-72 rounded-full bg-[#00ADB5]/10 blur-3xl" />
          <div className="absolute -right-20 bottom-0 size-72 rounded-full bg-[#00ADB5]/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ADB5]/5 blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="inline-block rounded-lg bg-[#00ADB5]/10 px-4 py-2 text-sm font-semibold text-[#00ADB5] backdrop-blur-sm">
              Our Fleet
            </div>
            <h2 className="mt-4 text-4xl font-bold text-[#222831]">
              Popular Cars
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#393E46]/70">
              Choose from our selection of premium vehicles for your perfect
              journey. Each car is thoroughly inspected and maintained for your
              safety and comfort.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {popularCars.map((car, index) => (
              <div
                key={car.id}
                className="group relative overflow-hidden rounded-xl border-2 border-[#00ADB5]/20 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#00ADB5]/40 hover:shadow-xl"
                style={{
                  animation: 'fadeInUp 0.5s ease-out forwards',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="relative h-56">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#222831]/60 via-[#222831]/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Floating Specs */}
                  <div className="absolute inset-x-4 bottom-4 flex justify-between text-sm text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="rounded-full bg-[#222831]/30 px-3 py-1 backdrop-blur-sm">
                      {car.specs.transmission}
                    </span>
                    <span className="rounded-full bg-[#222831]/30 px-3 py-1 backdrop-blur-sm">
                      {car.specs.fuelType}
                    </span>
                  </div>
                </div>

                {/* Car Details */}
                <div className="border-t-2 border-[#00ADB5]/10 p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-[#222831]">
                        {car.name}
                      </h3>
                      <span className="rounded-full bg-[#00ADB5]/10 px-3 py-1 text-sm font-semibold text-[#00ADB5]">
                        {car.category}
                      </span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {car.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-[#393E46]/5 px-3 py-1 text-xs text-[#393E46] transition-colors hover:bg-[#00ADB5]/10"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specs Grid */}
                  <div className="mb-6 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 rounded-lg bg-[#393E46]/5 p-3 transition-colors hover:bg-[#00ADB5]/10">
                      <span className="text-lg">👥</span>
                      <span className="text-sm font-medium text-[#393E46]">
                        {car.specs.seats} Seats
                      </span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-[#393E46]/5 p-3 transition-colors hover:bg-[#00ADB5]/10">
                      <span className="text-lg">🛣️</span>
                      <span className="text-sm font-medium text-[#393E46]">
                        {car.specs.range}
                      </span>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between border-t border-[#393E46]/10 pt-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-[#00ADB5]">
                        ${car.price}
                      </span>
                      <span className="text-sm text-[#393E46]">/day</span>
                    </div>
                    <Link
                      to={`/booking?car=${car.id}`}
                      className="group relative overflow-hidden rounded-lg bg-[#00ADB5] px-6 py-2 font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <span className="relative z-10">Book Now</span>
                      <div className="absolute inset-0 -translate-x-full bg-[#222831] transition-transform group-hover:translate-x-0" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Cars CTA */}
          <div className="mt-12 text-center">
            <Link
              to="/cars"
              className="group inline-flex items-center gap-2 text-[#00ADB5] transition-colors hover:text-[#222831]"
            >
              <span>View All Cars</span>
              <svg
                className="size-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#EEEEEE] via-white to-[#EEEEEE] py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute -left-20 top-0 size-72 rounded-full bg-[#00ADB5]/10 blur-3xl" />
          <div className="absolute -right-20 bottom-0 size-72 rounded-full bg-[#00ADB5]/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ADB5]/5 blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="inline-block rounded-lg bg-[#00ADB5]/10 px-4 py-2 text-sm font-semibold text-[#00ADB5] backdrop-blur-sm">
              Limited Time Deals
            </div>
            <h2 className="mt-4 text-4xl font-bold text-[#222831]">
              Special Offers
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#393E46]/70">
              Take advantage of our exclusive deals and save on your next car
              rental. Book now and enjoy premium services at special rates.
            </p>
          </div>

          {/* Offers Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {specialOffers.map((offer, index) => (
              <div
                key={offer.code}
                className="group relative"
                style={{
                  animation: 'fadeInUp 0.5s ease-out forwards',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="relative overflow-hidden rounded-xl border-2 border-[#00ADB5]/20 bg-white p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#00ADB5]/40 hover:shadow-xl">
                  <div className="relative">
                    <div className="mb-8 flex items-center justify-between">
                      <span className="flex size-16 items-center justify-center rounded-full bg-[#00ADB5]/10 text-4xl transition-transform group-hover:scale-110">
                        {offer.icon}
                      </span>
                      <span className="rounded-full bg-[#00ADB5] px-6 py-2 text-xl font-bold text-white shadow-lg">
                        Save {offer.discount}
                      </span>
                    </div>

                    <h3 className="mb-3 text-3xl font-bold text-[#222831]">
                      {offer.title}
                    </h3>
                    <p className="mb-6 text-lg text-[#393E46]/80">
                      {offer.description}
                    </p>

                    {/* Conditions */}
                    <div className="mb-8 space-y-3">
                      {offer.conditions.map((condition) => (
                        <div
                          key={condition}
                          className="flex items-center gap-2 text-[#393E46]"
                        >
                          <span className="flex size-5 items-center justify-center rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                            ✓
                          </span>
                          {condition}
                        </div>
                      ))}
                    </div>

                    {/* Promo Code and CTA */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#393E46]/10 pt-6">
                      <div>
                        <p className="text-sm text-[#393E46]/60">Use Code:</p>
                        <code className="relative mt-1 block font-mono text-xl font-bold text-[#00ADB5]">
                          {offer.code}
                          <div className="absolute -inset-1 -z-10 rounded bg-[#00ADB5]/5" />
                        </code>
                      </div>
                      <Link
                        to="/booking"
                        className="group relative overflow-hidden rounded-lg bg-[#00ADB5] px-6 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                      >
                        <span className="relative z-10">Book Now</span>
                        <div className="absolute inset-0 -translate-x-full bg-[#222831] transition-transform group-hover:translate-x-0" />
                      </Link>
                    </div>

                    {/* Valid Until */}
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#393E46]/5 px-4 py-2 text-sm text-[#393E46]">
                      <svg
                        className="size-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Valid until:{' '}
                      {new Date(offer.validUntil).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <Link
              to="/offers"
              className="group inline-flex items-center gap-2 text-[#00ADB5] transition-colors hover:text-[#222831]"
            >
              <span>View All Offers</span>
              <svg
                className="size-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#EEEEEE] via-white to-[#EEEEEE] py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute -left-20 top-0 size-72 rounded-full bg-[#00ADB5]/10 blur-3xl" />
          <div className="absolute -right-20 bottom-0 size-72 rounded-full bg-[#00ADB5]/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ADB5]/5 blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="inline-block rounded-lg bg-[#00ADB5]/10 px-4 py-2 text-sm font-semibold text-[#00ADB5] backdrop-blur-sm">
              Our Advantages
            </div>
            <h2 className="mt-4 text-4xl font-bold text-[#222831]">
              Why Choose Us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#393E46]/70">
              Experience the perfect blend of convenience, reliability, and
              exceptional service with our premium car rental solutions.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative"
                style={{
                  animation: 'fadeInUp 0.5s ease-out forwards',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="relative overflow-hidden rounded-lg bg-white p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-[#00ADB5]/10 text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#00ADB5]/20">
                      {feature.icon}
                    </div>

                    {/* Title & Description */}
                    <h3 className="mb-3 text-xl font-bold text-[#222831]">
                      {feature.title}
                    </h3>
                    <p className="mb-6 text-[#393E46]/70">
                      {feature.description}
                    </p>

                    {/* Stats Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#00ADB5]/10 px-4 py-2 text-sm font-semibold text-[#00ADB5]">
                      <span className="relative flex size-2">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#00ADB5]/40"></span>
                        <span className="relative inline-flex size-2 rounded-full bg-[#00ADB5]"></span>
                      </span>
                      {feature.stats}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-[#00ADB5] transition-colors hover:text-[#222831]"
            >
              <span>Learn More About Us</span>
              <svg
                className="size-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#EEEEEE] via-white to-[#EEEEEE] py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute -left-20 top-0 size-72 rounded-full bg-[#00ADB5]/10 blur-3xl" />
          <div className="absolute -right-20 bottom-0 size-72 rounded-full bg-[#00ADB5]/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ADB5]/5 blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="inline-block rounded-lg bg-[#00ADB5]/10 px-4 py-2 text-sm font-semibold text-[#00ADB5] backdrop-blur-sm">
              Simple Process
            </div>
            <h2 className="mt-4 text-4xl font-bold text-[#222831]">
              How It Works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#393E46]/70">
              Renting a car with us is quick and easy. Follow these simple steps
              to get started with your journey.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {howItWorks.map((step, index) => (
              <div
                key={step.step}
                className="group relative"
                style={{
                  animation: 'fadeInUp 0.5s ease-out forwards',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Connecting Line */}
                {index < howItWorks.length - 1 && (
                  <div className="absolute right-0 top-16 hidden w-full border-t-2 border-dashed border-[#00ADB5]/30 md:block">
                    <div className="absolute -right-3 -top-1.5 size-3 rounded-full bg-[#00ADB5]" />
                  </div>
                )}

                {/* Step Card */}
                <div className="relative overflow-hidden rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative z-10">
                    {/* Step Number and Icon */}
                    <div className="mb-6 flex items-center justify-between">
                      <div className="relative">
                        <div className="flex size-16 items-center justify-center rounded-full bg-[#00ADB5] text-2xl font-bold text-white">
                          {step.step}
                        </div>
                        <div className="absolute -right-1 -top-1 size-6 animate-ping rounded-full bg-[#00ADB5]/30" />
                      </div>
                      <span className="text-4xl transition-transform duration-300 group-hover:scale-125">
                        {step.icon}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="mb-3 text-2xl font-bold text-[#222831]">
                      {step.title}
                    </h3>
                    <p className="mb-6 text-[#393E46]/70">{step.description}</p>

                    {/* Features List */}
                    <ul className="space-y-3">
                      {step.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-[#393E46]"
                        >
                          <span className="flex size-5 items-center justify-center rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                            ✓
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <Link
              to="/booking"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#00ADB5] px-8 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#222831] hover:shadow-lg"
            >
              Start Booking Now
              <svg
                className="size-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="relative bg-gradient-to-br from-[#EEEEEE] via-white to-[#EEEEEE] py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#222831]">
              Our Locations
            </h2>
            <p className="mx-auto max-w-2xl text-[#393E46]/70">
              Find us at convenient locations across the city. Our offices are
              equipped with modern facilities to serve you better.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {locations.map((location) => (
              <div
                key={location.name}
                className="group overflow-hidden rounded-xl border-2 border-[#00ADB5]/20 bg-white shadow-lg transition-all hover:border-[#00ADB5]/40"
              >
                <div className="relative h-64">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#222831]/80 via-[#222831]/30 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {location.name}
                        </h3>
                        <p className="text-white/80">{location.address}</p>
                      </div>
                      <span className="rounded-full bg-[#00ADB5] px-3 py-1 text-sm font-semibold text-white shadow-lg">
                        {location.hours}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {location.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-[#00ADB5]/10 px-3 py-1 text-sm text-[#00ADB5]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2 text-[#393E46]">
                    <div className="flex items-center gap-2">
                      <span>📞</span> {location.phone}
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📧</span> {location.email}
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📍</span> {location.coordinates.lat},{' '}
                      {location.coordinates.lng}
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <a
                      href={`https://maps.google.com/?q=${location.coordinates.lat},${location.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#00ADB5] transition-colors hover:text-[#222831]"
                    >
                      View on Maps
                      <svg
                        className="size-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                    <Link
                      to={`/booking?location=${location.name}`}
                      className="rounded-lg bg-[#00ADB5] px-4 py-2 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#222831] hover:shadow-lg"
                    >
                      Book at This Location
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#EEEEEE] via-white to-[#EEEEEE] py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute -left-20 top-0 size-72 rounded-full bg-[#00ADB5]/10 blur-3xl" />
          <div className="absolute -right-20 bottom-0 size-72 rounded-full bg-[#00ADB5]/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ADB5]/5 blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="inline-block rounded-lg bg-[#00ADB5]/10 px-4 py-2 text-sm font-semibold text-[#00ADB5] backdrop-blur-sm">
              Customer Reviews
            </div>
            <h2 className="mt-4 text-4xl font-bold text-[#222831]">
              What Our Customers Say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#393E46]/70">
              Don&apos;t just take our word for it. Here&apos;s what our valued
              customers have to say about their experience with us.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="group relative"
                style={{
                  animation: 'fadeInUp 0.5s ease-out forwards',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="relative overflow-hidden rounded-xl border-2 border-[#00ADB5]/20 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#00ADB5]/40 hover:shadow-xl">
                  <div className="relative">
                    {/* Quote Icon */}
                    <div className="absolute -right-2 -top-2 text-4xl text-[#00ADB5] opacity-50">
                      &quot;
                    </div>

                    {/* User Info */}
                    <div className="mb-6 flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="size-16 rounded-full object-cover ring-2 ring-[#00ADB5] transition-transform duration-300"
                        />
                        {testimonial.verified && (
                          <div className="absolute -right-1 -top-1 rounded-full bg-[#00ADB5] p-1.5 text-white ring-2 ring-white">
                            <svg
                              className="size-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#222831]">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-[#393E46]/70">
                          {testimonial.title}
                        </p>
                        <div className="mt-2 flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`size-4 transition-colors duration-300 ${
                                i < testimonial.rating
                                  ? 'text-[#00ADB5] group-hover:text-[#00ADB5]'
                                  : 'text-[#393E46]/20'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Review Text */}
                    <div className="relative mb-6">
                      <p className="text-[#393E46]">{testimonial.comment}</p>
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between rounded-lg bg-[#393E46]/5 px-4 py-2 text-sm text-[#393E46]">
                      <div className="flex items-center gap-2">
                        <span>🚗</span>
                        {testimonial.carRented}
                      </div>
                      <div className="flex items-center gap-2">
                        <span>📅</span>
                        {new Date(testimonial.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <Link
              to="/testimonials"
              className="group inline-flex items-center gap-2 text-[#00ADB5] transition-colors hover:text-[#222831]"
            >
              <span>View All Reviews</span>
              <svg
                className="size-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="grow pt-16">
          {' '}
          {/* Added pt-16 for navbar spacing */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/cars" element={<Cars />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
