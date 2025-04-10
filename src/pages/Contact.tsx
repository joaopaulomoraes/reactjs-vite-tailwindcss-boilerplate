import { FormEvent, useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus({
        type: 'success',
        message: "Message sent successfully! We'll get back to you soon."
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: '📞',
      label: 'Main Office',
      value: '+1 (888) 555-0123',
      subtext: '24/7 Customer Support'
    },
    {
      icon: '✉️',
      label: 'Email Support',
      value: 'support@carental.com',
      subtext: 'Response within 24 hours'
    },
    {
      icon: '📍',
      label: 'Main Branch',
      value: '789 Airport Boulevard, Manhattan',
      subtext: 'New York, NY 10019'
    },
    {
      icon: '⏰',
      label: 'Business Hours',
      value: 'Mon-Sat: 8:00 AM - 8:00 PM',
      subtext: 'Sun: 10:00 AM - 6:00 PM'
    }
  ]

  const formFields = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      icon: '👤',
      placeholder: 'Enter your full name'
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      icon: '✉️',
      placeholder: 'your.email@example.com'
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      icon: '💭',
      placeholder:
        'How can we help you today? Please provide specific details about your inquiry.'
    }
  ]

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-white via-[#f8f9fa] to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 size-96 rounded-full bg-[#00ADB5]/10 blur-[100px]" />
        <div className="absolute -right-20 bottom-0 size-96 rounded-full bg-[#00ADB5]/10 blur-[100px]" />
        <div className="absolute left-1/2 top-1/3 size-64 -translate-x-1/2 rounded-full bg-[#222831]/5 blur-[80px]" />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b-4 border-[#00ADB5]/30 bg-gradient-to-r from-[#222831] to-[#393E46] py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#00ADB5]/10" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1.22676' cy='1.22676' r='1.22676' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px'
            }}
          />
        </div>
        <div className="container relative mx-auto px-4 text-center">
          <div className="inline-block rounded-lg bg-[#00ADB5]/10 px-6 py-2 text-sm font-semibold text-[#00ADB5] backdrop-blur-sm">
            Get in Touch
          </div>
          <h1 className="mt-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            We are Here to Help
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Have questions about our services? Need support with your rental? We
            are just a message away.
          </p>
        </div>
      </section>

      <div className="container relative mx-auto px-4">
        <div className="grid gap-16 py-20 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl border-2 border-[#00ADB5]/30 bg-white/80 p-8 shadow-xl backdrop-blur-sm">
            <h2 className="mb-8 text-3xl font-bold text-[#222831]">
              Send us a message
            </h2>

            {submitStatus.type && (
              <div
                className={`mb-6 rounded-lg p-4 ${
                  submitStatus.type === 'success'
                    ? 'bg-green-100/80 text-green-700 backdrop-blur-sm'
                    : 'bg-red-100/80 text-red-700 backdrop-blur-sm'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {formFields.map((field) => (
                <div key={field.name}>
                  <label className="mb-2 block text-sm font-medium text-[#393E46]">
                    {field.label}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400">
                      {field.icon}
                    </span>
                    {field.type === 'textarea' ? (
                      <textarea
                        rows={4}
                        className="w-full rounded-lg border-2 border-[#00ADB5]/20 p-3 pl-10 transition-all focus:border-[#00ADB5] focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20"
                        value={formData[field.name as keyof typeof formData]}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [field.name]: e.target.value
                          })
                        }
                        placeholder={field.placeholder}
                        required
                      />
                    ) : (
                      <input
                        type={field.type}
                        className="w-full rounded-lg border-2 border-[#00ADB5]/20 p-3 pl-10 transition-all focus:border-[#00ADB5] focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20"
                        value={formData[field.name as keyof typeof formData]}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [field.name]: e.target.value
                          })
                        }
                        placeholder={field.placeholder}
                        required
                      />
                    )}
                  </div>
                </div>
              ))}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full overflow-hidden rounded-lg border-2 border-[#00ADB5] bg-gradient-to-r from-[#00ADB5] to-[#00959d] p-4 text-white transition-all hover:shadow-lg hover:shadow-[#00ADB5]/20 disabled:opacity-70"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="size-5 animate-spin" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        className="size-5 transition-transform duration-300 group-hover:translate-x-1"
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
                    </>
                  )}
                </span>
                <div className="absolute inset-0 -translate-x-full bg-[#222831] transition-transform duration-300 ease-out group-hover:translate-x-0" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="group relative rounded-xl border-2 border-[#00ADB5]/30 bg-white/80 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#00ADB5]/50 hover:shadow-xl"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00ADB5]/0 to-[#00ADB5]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                  <div className="flex items-center space-x-4">
                    <span className="flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-[#00ADB5]/10 to-[#00ADB5]/20 text-2xl text-[#00ADB5] transition-all group-hover:from-[#00ADB5] group-hover:to-[#00959d] group-hover:text-white">
                      {info.icon}
                    </span>
                    <div>
                      <h3 className="font-semibold text-[#222831]">
                        {info.label}
                      </h3>
                      <p className="text-[#393E46] group-hover:text-[#00ADB5]">
                        {info.value}
                      </p>
                      <p className="text-sm text-gray-500">{info.subtext}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map - Full Width */}
        <div className="-mx-4 mb-20 overflow-hidden border-2 border-[#00ADB5]/30 bg-white shadow-lg sm:mx-0 sm:rounded-xl">
          <div className="relative aspect-[21/9] w-full">
            <iframe
              title="Our Location"
              src="https://maps.google.com/maps?q=car+rental+new+york&t=&z=13&ie=UTF8&iwloc=&output=embed&style=feature:all|element:labels|visibility:on&style=feature:all|element:labels.text.fill|color:0x000000&style=feature:all|element:labels.text.stroke|color:0xffffff&style=feature:all|element:labels.icon|visibility:off"
              className="size-full border-0 transition-all duration-500 hover:grayscale-0"
              loading="lazy"
              allowFullScreen
            />
            <a
              href="https://maps.google.com/maps?q=car+rental+new+york"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 rounded bg-white/90 px-4 py-2 text-sm font-medium text-gray-700 shadow-md transition-all hover:bg-[#00ADB5]"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
