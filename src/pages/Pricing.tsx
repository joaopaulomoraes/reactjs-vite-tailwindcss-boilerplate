interface PricingPlan {
  carType: string
  description: string
  image: string
  pricing: {
    daily: number
    weekly: number
    monthly: number
  }
  features: string[]
}

interface Promotion {
  code: string
  discount: string
  description: string
  validUntil: string
}

interface MembershipPlan {
  name: string
  price: number
  period: string
  features: string[]
  recommended?: boolean
}

interface SeasonalOffer {
  season: string
  discount: string
  validFrom: string
  validTo: string
  description: string
}

function Pricing() {
  const pricingPlans: PricingPlan[] = [
    {
      carType: 'Economy',
      description: 'Perfect for city driving',
      image: 'https://picsum.photos/300/200?random=1',
      pricing: {
        daily: 29.99,
        weekly: 179.99,
        monthly: 599.99
      },
      features: ['4 Seats', 'Manual/Auto', 'AC', 'Bluetooth']
    },
    {
      carType: 'SUV',
      description: 'Ideal for family trips',
      image: 'https://picsum.photos/300/200?random=2',
      pricing: {
        daily: 49.99,
        weekly: 299.99,
        monthly: 999.99
      },
      features: ['7 Seats', 'Auto', 'AC', 'GPS', 'Roof Rack']
    },
    {
      carType: 'Luxury',
      description: 'Premium driving experience',
      image: 'https://picsum.photos/300/200?random=3',
      pricing: {
        daily: 89.99,
        weekly: 549.99,
        monthly: 1799.99
      },
      features: ['5 Seats', 'Auto', 'Premium Audio', 'Leather Seats', 'GPS']
    }
  ]

  const promotions: Promotion[] = [
    {
      code: 'FIRST10',
      discount: '10% OFF',
      description: 'First-time renters discount',
      validUntil: '2024-12-31'
    },
    {
      code: 'WEEKEND25',
      discount: '25% OFF',
      description: 'Weekend special rates',
      validUntil: '2024-06-30'
    }
  ]

  const includedFeatures = [
    {
      title: 'Insurance Coverage',
      details: 'Comprehensive insurance with $500 deductible'
    },
    {
      title: 'Mileage Policy',
      details: '150 km/day included, $0.25/km thereafter'
    },
    {
      title: 'Fuel Policy',
      details: 'Full-to-full policy - return with same fuel level'
    }
  ]

  const membershipPlans: MembershipPlan[] = [
    {
      name: 'Basic',
      price: 9.99,
      period: 'month',
      features: ['5% off all rentals', 'Priority booking', 'Free cancellation']
    },
    {
      name: 'Premium',
      price: 19.99,
      period: 'month',
      recommended: true,
      features: [
        '15% off all rentals',
        'Priority booking',
        'Free cancellation',
        'Free additional driver',
        'Airport pickup'
      ]
    },
    {
      name: 'Business',
      price: 49.99,
      period: 'month',
      features: [
        '25% off all rentals',
        'Priority booking',
        'Free cancellation',
        'Multiple additional drivers',
        'Airport pickup',
        'Dedicated account manager'
      ]
    }
  ]

  const seasonalOffers: SeasonalOffer[] = [
    {
      season: 'Summer Special',
      discount: '20% OFF',
      validFrom: 'June 1',
      validTo: 'August 31',
      description: 'Perfect for summer road trips'
    },
    {
      season: 'Winter Deal',
      discount: '15% OFF',
      validFrom: 'December 1',
      validTo: 'February 28',
      description: 'Including winter tire package'
    }
  ]

  const pricingFaqs = [
    {
      question: 'Are there any hidden fees?',
      answer: 'No hidden fees. All charges are clearly listed before booking.'
    },
    {
      question: 'How is the security deposit handled?',
      answer:
        'Security deposit is pre-authorized on your card and released after return.'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">Transparent Pricing</h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-600">
          Choose the perfect rental plan that fits your needs. No hidden fees,
          just straightforward pricing.
        </p>
      </section>

      {/* Membership Plans */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Membership Plans
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {membershipPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg p-6 shadow-lg transition-transform hover:-translate-y-1 ${
                plan.recommended
                  ? 'bg-gradient-to-b from-indigo-600 to-indigo-700 text-white'
                  : 'bg-white'
              }`}
            >
              {plan.recommended && (
                <div className="mb-4 rounded-full bg-yellow-400 px-3 py-1 text-center text-sm font-semibold text-indigo-900">
                  Recommended
                </div>
              )}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="my-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-lg">/{plan.period}</span>
              </div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className={`mr-2 size-5 ${
                        plan.recommended ? 'text-yellow-400' : 'text-green-500'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full rounded-lg px-4 py-2 transition-colors ${
                  plan.recommended
                    ? 'bg-white text-indigo-600 hover:bg-gray-100'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="mb-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.carType}
              className="overflow-hidden rounded-lg bg-white shadow-lg"
            >
              <img
                src={plan.image}
                alt={plan.carType}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold">{plan.carType}</h3>
                <p className="mb-4 text-gray-600">{plan.description}</p>
                <div className="mb-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Daily</span>
                    <span className="font-bold">${plan.pricing.daily}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekly</span>
                    <span className="font-bold">${plan.pricing.weekly}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly</span>
                    <span className="font-bold">${plan.pricing.monthly}</span>
                  </div>
                </div>
                <div className="mb-4 border-t pt-4">
                  <h4 className="mb-2 font-semibold">Features:</h4>
                  <ul className="space-y-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg
                          className="mr-2 size-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seasonal Offers */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Seasonal Offers</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {seasonalOffers.map((offer) => (
            <div
              key={offer.season}
              className="rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 p-6 text-white"
            >
              <h3 className="text-2xl font-bold">{offer.season}</h3>
              <p className="my-2 text-3xl font-bold text-yellow-400">
                {offer.discount}
              </p>
              <p className="mb-4">{offer.description}</p>
              <div className="text-sm">
                Valid from {offer.validFrom} to {offer.validTo}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promotions Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold">Current Promotions</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {promotions.map((promo) => (
            <div
              key={promo.code}
              className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white"
            >
              <div className="mb-4">
                <span className="text-3xl font-bold">{promo.discount}</span>
                <span className="ml-2 rounded-full bg-white px-3 py-1 text-sm text-indigo-600">
                  {promo.code}
                </span>
              </div>
              <p className="mb-2">{promo.description}</p>
              <p className="text-sm">Valid until: {promo.validUntil}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Pricing FAQs</h2>
        <div className="mx-auto max-w-3xl divide-y">
          {pricingFaqs.map((faq) => (
            <div key={faq.question} className="py-6">
              <h3 className="mb-2 text-lg font-semibold">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included Section */}
      <section>
        <h2 className="mb-6 text-3xl font-bold">What&apos;s Included</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {includedFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg bg-white p-6 shadow-md"
            >
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.details}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Pricing
