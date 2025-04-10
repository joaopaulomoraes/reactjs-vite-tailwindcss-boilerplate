import { useState } from 'react'

interface CarOption {
  id: string
  type: string
  model: string
  price: number
  image: string
}

interface Location {
  id: string
  name: string
}

function Booking() {
  const carOptions: CarOption[] = [
    {
      id: '1',
      type: 'Economy',
      model: 'Toyota Corolla',
      price: 29.99,
      image:
        'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: '2',
      type: 'SUV',
      model: 'Honda CR-V',
      price: 49.99,
      image:
        'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: '3',
      type: 'Luxury',
      model: 'BMW 5 Series',
      price: 89.99,
      image:
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop&q=60'
    }
  ]

  const locations: Location[] = [
    { id: '1', name: 'Downtown Office' },
    { id: '2', name: 'Airport Terminal 1' },
    { id: '3', name: 'Hotel Zone' }
  ]

  const [formData, setFormData] = useState({
    carId: '',
    pickupLocation: '',
    pickupDate: '',
    pickupTime: '',
    dropLocation: '',
    dropDate: '',
    dropTime: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    paymentMethod: 'credit'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking submitted:', formData)
  }

  const selectedCar = carOptions.find((car) => car.id === formData.carId)

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-[#f8f9fa] to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 size-72 rounded-full bg-[#00ADB5]/5 blur-3xl" />
        <div className="absolute -right-20 bottom-0 size-72 rounded-full bg-[#00ADB5]/5 blur-3xl" />
        <div className="bg-[#00ADB5]/3 absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <div className="inline-block rounded-lg bg-[#00ADB5]/10 px-4 py-2 text-sm font-semibold text-[#00ADB5] backdrop-blur-sm">
            Easy Booking Process
          </div>
          <h1 className="mt-4 text-4xl font-bold text-[#222831] md:text-5xl">
            Book Your Car
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[#393E46]/80">
            Select your preferred vehicle and complete your booking in just a
            few simple steps.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Car Selection */}
              <section className="rounded-xl border-2 border-[#00ADB5]/20 bg-white p-6 shadow-lg transition-all duration-300 hover:border-[#00ADB5]/30 hover:shadow-xl">
                <h2 className="mb-6 text-2xl font-semibold text-[#222831]">
                  Choose Your Car
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {carOptions.map((car) => (
                    <div
                      key={car.id}
                      className={`group cursor-pointer overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                        formData.carId === car.id
                          ? 'border-[#00ADB5] ring-2 ring-[#00ADB5]/20'
                          : 'border-[#00ADB5]/20 hover:border-[#00ADB5]/40'
                      }`}
                      onClick={() =>
                        setFormData({ ...formData, carId: car.id })
                      }
                    >
                      <div className="relative">
                        <img
                          src={car.image}
                          alt={car.model}
                          className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute inset-x-4 bottom-4">
                          <h3 className="font-semibold text-white">
                            {car.model}
                          </h3>
                          <p className="text-sm text-white/80">{car.type}</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-center text-xl font-bold text-[#00ADB5]">
                          ${car.price}
                          <span className="text-sm text-gray-500">/day</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Pickup & Drop-off */}
              <section className="rounded-xl border-2 border-[#00ADB5]/20 bg-white p-6 shadow-lg transition-all duration-300 hover:border-[#00ADB5]/30 hover:shadow-xl">
                <h2 className="mb-6 text-2xl font-semibold text-[#222831]">
                  Pickup & Drop-off Details
                </h2>
                <div className="grid gap-8 md:grid-cols-2">
                  {/* Pickup Details */}
                  <div className="space-y-4">
                    <h3 className="flex items-center gap-2 font-semibold text-[#222831]">
                      <span className="rounded-full bg-[#00ADB5]/10 p-2 text-[#00ADB5]">
                        📍
                      </span>
                      Pickup
                    </h3>
                    <select
                      className="w-full rounded-lg border-2 border-[#00ADB5]/20 p-3 transition-all focus:border-[#00ADB5] focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20"
                      value={formData.pickupLocation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          pickupLocation: e.target.value
                        })
                      }
                    >
                      <option value="">Select location</option>
                      {locations.map((loc) => (
                        <option key={loc.id} value={loc.id}>
                          {loc.name}
                        </option>
                      ))}
                    </select>
                    <input
                      type="date"
                      className="w-full rounded-lg border-2 border-[#00ADB5]/20 p-3 transition-all focus:border-[#00ADB5] focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20"
                      value={formData.pickupDate}
                      onChange={(e) =>
                        setFormData({ ...formData, pickupDate: e.target.value })
                      }
                    />
                    <input
                      type="time"
                      className="w-full rounded-lg border-2 border-[#00ADB5]/20 p-3 transition-all focus:border-[#00ADB5] focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20"
                      value={formData.pickupTime}
                      onChange={(e) =>
                        setFormData({ ...formData, pickupTime: e.target.value })
                      }
                    />
                  </div>

                  {/* Drop-off Details */}
                  <div className="space-y-4">
                    <h3 className="flex items-center gap-2 font-semibold text-[#222831]">
                      <span className="rounded-full bg-[#00ADB5]/10 p-2 text-[#00ADB5]">
                        🏁
                      </span>
                      Drop-off
                    </h3>
                    <select
                      className="w-full rounded-lg border-2 border-[#00ADB5]/20 p-3 transition-all focus:border-[#00ADB5] focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20"
                      value={formData.dropLocation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dropLocation: e.target.value
                        })
                      }
                    >
                      <option value="">Select location</option>
                      {locations.map((loc) => (
                        <option key={loc.id} value={loc.id}>
                          {loc.name}
                        </option>
                      ))}
                    </select>
                    <input
                      type="date"
                      className="w-full rounded-lg border-2 border-[#00ADB5]/20 p-3 transition-all focus:border-[#00ADB5] focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20"
                      value={formData.dropDate}
                      onChange={(e) =>
                        setFormData({ ...formData, dropDate: e.target.value })
                      }
                    />
                    <input
                      type="time"
                      className="w-full rounded-lg border-2 border-[#00ADB5]/20 p-3 transition-all focus:border-[#00ADB5] focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20"
                      value={formData.dropTime}
                      onChange={(e) =>
                        setFormData({ ...formData, dropTime: e.target.value })
                      }
                    />
                  </div>
                </div>
              </section>

              {/* Personal Details */}
              <section className="rounded-xl border-2 border-[#00ADB5]/20 bg-white p-6 shadow-lg transition-all duration-300 hover:border-[#00ADB5]/30 hover:shadow-xl">
                <h2 className="mb-6 text-2xl font-semibold text-[#222831]">
                  Personal Details
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="rounded-lg border-2 border-[#00ADB5]/20 p-3 transition-all focus:border-[#00ADB5] focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="rounded-lg border-2 border-[#00ADB5]/20 p-3 transition-all focus:border-[#00ADB5] focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="rounded-lg border-2 border-[#00ADB5]/20 p-3 transition-all focus:border-[#00ADB5] focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="rounded-lg border-2 border-[#00ADB5]/20 p-3 transition-all focus:border-[#00ADB5] focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </section>

              {/* Payment Method */}
              <section className="rounded-xl border-2 border-[#00ADB5]/20 bg-white p-6 shadow-lg transition-all duration-300 hover:border-[#00ADB5]/30 hover:shadow-xl">
                <h2 className="mb-6 text-2xl font-semibold text-[#222831]">
                  Payment Method
                </h2>
                <div className="space-y-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      value="credit"
                      checked={formData.paymentMethod === 'credit'}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          paymentMethod: e.target.value
                        })
                      }
                      className="mr-2"
                    />
                    Credit Card
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      value="debit"
                      checked={formData.paymentMethod === 'debit'}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          paymentMethod: e.target.value
                        })
                      }
                      className="mr-2"
                    />
                    Debit Card
                  </label>
                </div>
              </section>
            </form>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 rounded-xl border-2 border-[#00ADB5]/20 bg-white p-6 shadow-lg transition-all duration-300 hover:border-[#00ADB5]/30 hover:shadow-xl">
              <h2 className="mb-6 text-2xl font-semibold text-[#222831]">
                Booking Summary
              </h2>
              {selectedCar && (
                <div className="mb-6 overflow-hidden rounded-xl border-2 border-[#00ADB5]/20">
                  <div className="relative">
                    <img
                      src={selectedCar.image}
                      alt={selectedCar.model}
                      className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    <div className="absolute inset-x-4 bottom-4">
                      <h3 className="font-semibold text-white">
                        {selectedCar.model}
                      </h3>
                      <p className="text-white/90">{selectedCar.type}</p>
                    </div>
                  </div>
                  <div className="border-t-2 border-[#00ADB5]/10 bg-[#f8f9fa] p-4 text-center">
                    <p className="text-3xl font-bold text-[#00ADB5]">
                      ${selectedCar.price}
                      <span className="text-sm text-[#393E46]/60">/day</span>
                    </p>
                  </div>
                </div>
              )}
              <button
                type="submit"
                onClick={handleSubmit}
                className="group relative w-full overflow-hidden rounded-lg border-2 border-[#00ADB5] bg-[#00ADB5] px-6 py-3 font-medium text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="relative z-10">Confirm Booking</span>
                <div className="absolute inset-0 -translate-x-full bg-[#222831] transition-transform duration-300 ease-out group-hover:translate-x-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
