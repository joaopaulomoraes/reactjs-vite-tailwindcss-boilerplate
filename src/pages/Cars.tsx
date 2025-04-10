import { useState } from 'react'
import { Link } from 'react-router-dom'

interface Car {
  id: string
  name: string
  type: string
  brand: string
  transmission: string
  pricePerDay: number
  image: string
  seats: number
  luggage: number
  mileage: string
  fuelType: string
  features: string[]
}

function Cars() {
  const [filters, setFilters] = useState({
    type: '',
    brand: '',
    transmission: '',
    priceRange: ''
  })
  const [sortBy, setSortBy] = useState('price-asc')
  const [currentPage, setCurrentPage] = useState(1)
  const [showMore, setShowMore] = useState(false)
  const carsPerPage = 9 // Changed from 6 to 9

  const carCategories = [
    { name: 'Economy', icon: '💰', count: 12, unsplashQuery: 'economy-car' },
    { name: 'Luxury', icon: '✨', count: 8, unsplashQuery: 'luxury-car' },
    { name: 'SUV', icon: '🚙', count: 15, unsplashQuery: 'suv-car' },
    { name: 'Electric', icon: '⚡', count: 6, unsplashQuery: 'electric-car' }
  ]

  const cars: Car[] = [
    {
      id: '1',
      name: 'Toyota Camry',
      type: 'Economy',
      brand: 'Toyota',
      transmission: 'Automatic',
      pricePerDay: 45.99,
      image:
        'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&auto=format&fit=crop&q=60',
      seats: 5,
      luggage: 3,
      mileage: 'Unlimited',
      fuelType: 'Hybrid',
      features: [
        'Bluetooth',
        'Backup Camera',
        'Cruise Control',
        'Apple CarPlay'
      ]
    },
    {
      id: '2',
      name: 'BMW 5 Series',
      type: 'Luxury',
      brand: 'BMW',
      transmission: 'Automatic',
      pricePerDay: 120.99,
      image:
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop&q=60',
      seats: 5,
      luggage: 4,
      mileage: 'Unlimited',
      fuelType: 'Petrol',
      features: ['Leather Seats', 'Sunroof', 'Navigation', 'Premium Sound']
    },
    {
      id: '3',
      name: 'Tesla Model 3',
      type: 'Electric',
      brand: 'Tesla',
      transmission: 'Automatic',
      pricePerDay: 89.99,
      image:
        'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&auto=format&fit=crop&q=60',
      seats: 5,
      luggage: 2,
      mileage: 'Unlimited',
      fuelType: 'Electric',
      features: ['Autopilot', 'Premium Sound', 'Navigation', 'Smart Summon']
    },
    {
      id: '4',
      name: 'Honda CR-V',
      type: 'SUV',
      brand: 'Honda',
      transmission: 'Automatic',
      pricePerDay: 65.99,
      image:
        'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=800&auto=format&fit=crop&q=60',
      seats: 7,
      luggage: 5,
      mileage: 'Unlimited',
      fuelType: 'Petrol',
      features: ['Third Row Seating', 'Backup Camera', 'Android Auto', 'AWD']
    },
    {
      id: '5',
      name: 'Mercedes-Benz C-Class',
      type: 'Luxury',
      brand: 'Mercedes',
      transmission: 'Automatic',
      pricePerDay: 110.99,
      image:
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60',
      seats: 5,
      luggage: 3,
      mileage: 'Unlimited',
      fuelType: 'Petrol',
      features: [
        'Leather Seats',
        'Navigation',
        'Premium Audio',
        'Parking Sensors'
      ]
    },
    {
      id: '6',
      name: 'Volkswagen ID.4',
      type: 'Electric',
      brand: 'Volkswagen',
      transmission: 'Automatic',
      pricePerDay: 79.99,
      image:
        'https://images.unsplash.com/photo-1617788138017-80ad40c89bf3?w=800&auto=format&fit=crop&q=60',
      seats: 5,
      luggage: 4,
      mileage: 'Unlimited',
      fuelType: 'Electric',
      features: [
        'Fast Charging',
        'Auto Pilot',
        'Panoramic Roof',
        'Climate Control'
      ]
    },
    {
      id: '7',
      name: 'Hyundai Tucson',
      type: 'SUV',
      brand: 'Hyundai',
      transmission: 'Automatic',
      pricePerDay: 69.99,
      image:
        'https://images.unsplash.com/photo-1614883424739-58641720f73e?w=800&auto=format&fit=crop&q=60',
      seats: 5,
      luggage: 4,
      mileage: 'Unlimited',
      fuelType: 'Hybrid',
      features: [
        'Apple CarPlay',
        'Lane Assist',
        'Blind Spot Monitor',
        'Wireless Charging'
      ]
    },
    {
      id: '8',
      name: 'Audi e-tron',
      type: 'Electric',
      brand: 'Audi',
      transmission: 'Automatic',
      pricePerDay: 129.99,
      image:
        'https://images.unsplash.com/photo-1619767886558-efdc7e108c3b?w=800&auto=format&fit=crop&q=60',
      seats: 5,
      luggage: 4,
      mileage: 'Unlimited',
      fuelType: 'Electric',
      features: [
        'Quattro AWD',
        'Premium Sound',
        'Virtual Cockpit',
        'Matrix LED'
      ]
    },
    {
      id: '9',
      name: 'Toyota Prius',
      type: 'Economy',
      brand: 'Toyota',
      transmission: 'Automatic',
      pricePerDay: 49.99,
      image:
        'https://images.unsplash.com/photo-1619767886558-efdc7e108c3b?w=800&auto=format&fit=crop&q=60',
      seats: 5,
      luggage: 3,
      mileage: 'Unlimited',
      fuelType: 'Hybrid',
      features: [
        'Lane Departure',
        'Adaptive Cruise',
        'Safety Sense',
        'Bluetooth'
      ]
    }
  ]

  const filterCars = () => {
    let filtered = [...cars]

    // Filter by type (category)
    if (filters.type) {
      filtered = filtered.filter((car) => car.type === filters.type)
    }

    // Filter by brand
    if (filters.brand) {
      filtered = filtered.filter((car) => car.brand === filters.brand)
    }

    // Filter by transmission
    if (filters.transmission) {
      filtered = filtered.filter(
        (car) => car.transmission === filters.transmission
      )
    }

    // Filter by price range
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number)
      filtered = filtered.filter(
        (car) => car.pricePerDay >= min && car.pricePerDay <= max
      )
    }

    return filtered
  }

  const sortCars = (filteredCars: Car[]) => {
    return [...filteredCars].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.pricePerDay - b.pricePerDay
        case 'price-desc':
          return b.pricePerDay - a.pricePerDay
        default:
          return 0
      }
    })
  }

  const filteredAndSortedCars = sortCars(filterCars())
  const totalPages = Math.ceil(filteredAndSortedCars.length / carsPerPage)
  const currentCars = filteredAndSortedCars.slice(
    (currentPage - 1) * carsPerPage,
    currentPage * carsPerPage
  )

  const visibleCars = showMore ? currentCars : currentCars.slice(0, 9)

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-[#f8f9fa] to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute -left-20 top-0 size-72 rounded-full bg-[#00ADB5]/5 blur-3xl" />
        <div className="absolute -right-20 bottom-0 size-72 rounded-full bg-[#00ADB5]/5 blur-3xl" />
        <div className="bg-[#00ADB5]/3 absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <div className="inline-block rounded-lg bg-[#00ADB5]/10 px-4 py-2 text-sm font-semibold text-[#00ADB5] backdrop-blur-sm">
            Our Fleet
          </div>
          <h1 className="mt-4 text-4xl font-bold text-[#222831] md:text-5xl">
            Choose Your Perfect Car
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[#393E46]/80">
            Select from our wide range of vehicles to find the perfect match for
            your journey.
          </p>
        </div>

        {/* Car Categories */}
        <section className="mb-12">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {carCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setFilters({ ...filters, type: category.name })}
                className={`group overflow-hidden rounded-xl border-2 ${
                  filters.type === category.name
                    ? 'border-[#00ADB5] bg-[#00ADB5]/5'
                    : 'border-[#00ADB5]/20 bg-white hover:border-[#00ADB5]/40'
                } p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <span className="mb-2 block text-3xl">{category.icon}</span>
                <h3 className="font-semibold text-[#222831]">
                  {category.name}
                </h3>
                <p className="text-sm text-[#393E46]/60">
                  {category.count} vehicles
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* Filter and Sort Bar */}
        <div className="mb-8 rounded-xl border-2 border-[#00ADB5]/20 bg-white p-6 shadow-lg">
          <div className="grid gap-4 md:grid-cols-5">
            <select
              className="rounded-lg border-2 border-[#00ADB5]/20 p-3 transition-all focus:border-[#00ADB5] focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20"
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            >
              <option value="">Car Type</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Hatchback">Hatchback</option>
            </select>

            <select
              className="rounded-lg border-2 border-[#00ADB5]/20 p-3 transition-all focus:border-[#00ADB5] focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20"
              value={filters.brand}
              onChange={(e) =>
                setFilters({ ...filters, brand: e.target.value })
              }
            >
              <option value="">Brand</option>
              <option value="Honda">Honda</option>
              <option value="Toyota">Toyota</option>
              <option value="BMW">BMW</option>
            </select>

            <select
              className="rounded-lg border-2 border-[#00ADB5]/20 p-3 transition-all focus:border-[#00ADB5] focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20"
              value={filters.transmission}
              onChange={(e) =>
                setFilters({ ...filters, transmission: e.target.value })
              }
            >
              <option value="">Transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>

            <select
              className="rounded-lg border-2 border-[#00ADB5]/20 p-3 transition-all focus:border-[#00ADB5] focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20"
              value={filters.priceRange}
              onChange={(e) =>
                setFilters({ ...filters, priceRange: e.target.value })
              }
            >
              <option value="">Price Range</option>
              <option value="0-50">$0 - $50/day</option>
              <option value="51-100">$51 - $100/day</option>
              <option value="101-200">$101 - $200/day</option>
            </select>

            <select
              className="rounded-lg border-2 border-[#00ADB5]/20 p-3 transition-all focus:border-[#00ADB5] focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Car Listings */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleCars.map((car) => (
            <div
              key={car.id}
              className="group overflow-hidden rounded-xl border-2 border-[#00ADB5]/20 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#00ADB5]/40 hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex justify-between text-sm">
                    <span>{car.transmission}</span>
                    <span>{car.fuelType}</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#222831]">
                    {car.name}
                  </h3>
                  <span className="rounded-full bg-[#00ADB5] bg-opacity-10 px-3 py-1 text-sm font-semibold text-[#00ADB5]">
                    {car.type}
                  </span>
                </div>
                <div className="mb-4 grid grid-cols-2 gap-2 text-sm text-[#393E46]">
                  <div className="flex items-center">
                    <span className="mr-1">👥</span> {car.seats} Seats
                  </div>
                  <div className="flex items-center">
                    <span className="mr-1">🧳</span> {car.luggage} Bags
                  </div>
                  <div className="flex items-center">
                    <span className="mr-1">🛣️</span> {car.mileage}
                  </div>
                  <div className="flex items-center">
                    <span className="mr-1">⛽</span> {car.fuelType}
                  </div>
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {car.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-gray-100 px-2 py-1 text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                  {car.features.length > 3 && (
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">
                      +{car.features.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between border-t-2 border-[#00ADB5]/10 pt-4">
                  <div>
                    <span className="text-2xl font-bold text-[#222831]">
                      ${car.pricePerDay}
                    </span>
                    <span className="text-[#393E46]">/day</span>
                  </div>
                  <Link
                    to={`/booking?car=${car.id}`}
                    className="rounded-md border-2 border-[#00ADB5] bg-[#00ADB5] px-4 py-2 text-[#EEEEEE] transition-all hover:bg-transparent hover:text-[#00ADB5]"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {currentCars.length > 6 && !showMore && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowMore(true)}
              className="group relative overflow-hidden rounded-xl border-2 border-[#00ADB5] bg-[#00ADB5] px-8 py-3 font-medium text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="relative z-10">Load More Cars</span>
              <div className="absolute inset-0 -translate-x-full bg-[#222831] transition-transform duration-300 ease-out group-hover:translate-x-0" />
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`rounded-md border-2 px-4 py-2 transition-all ${
                  currentPage === index + 1
                    ? 'border-[#00ADB5] bg-[#00ADB5] text-[#EEEEEE]'
                    : 'border-[#393E46] bg-[#393E46] text-[#EEEEEE] hover:border-[#00ADB5] hover:bg-[#00ADB5]'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Cars
