interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  position: string
  socialLinks: {
    linkedin?: string
    twitter?: string
  }
}

function About() {
  const timeline = [
    {
      year: '2010',
      event: 'Company Founded',
      description: 'Started with just 5 cars'
    },
    {
      year: '2015',
      event: 'National Expansion',
      description: 'Opened 10 new locations'
    },
    {
      year: '2018',
      event: 'Digital Revolution',
      description: 'Launched mobile app'
    },
    {
      year: '2023',
      event: 'Market Leader',
      description: '100+ locations nationwide'
    }
  ]

  const achievements = [
    { number: '250K+', label: 'Happy Customers' },
    { number: '500+', label: 'Fleet Size' },
    { number: '100+', label: 'Cities' },
    { number: '98%', label: 'Satisfaction Rate' }
  ]

  const partners = [
    { name: 'Toyota', logo: 'https://picsum.photos/100?random=10' },
    { name: 'BMW', logo: 'https://picsum.photos/100?random=11' },
    { name: 'Mercedes', logo: 'https://picsum.photos/100?random=12' },
    { name: 'Enterprise', logo: 'https://picsum.photos/100?random=13' }
  ]

  const teamMembers: TeamMember[] = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://picsum.photos/200?random=1',
      bio: 'With 15 years in the automotive industry, Sarah leads our vision for the future.',
      position: 'CEO & Founder',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://picsum.photos/200?random=2',
      bio: 'Tech innovator with a passion for creating seamless digital experiences.',
      position: 'CTO',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      name: 'David Rodriguez',
      role: 'Operations Director',
      image: 'https://picsum.photos/200?random=3',
      bio: 'Ensures smooth operations and exceptional customer service across all locations.',
      position: 'Head of Operations',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    }
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-[#f8f9fa] to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute -left-20 top-0 size-72 rounded-full bg-[#00ADB5]/5 blur-3xl" />
        <div className="absolute -right-20 bottom-0 size-72 rounded-full bg-[#00ADB5]/5 blur-3xl" />
        <div className="bg-[#00ADB5]/3 absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b-4 border-[#00ADB5]/30 bg-[#222831] py-20">
        <div className="container relative mx-auto px-4">
          <div className="text-center">
            <div className="inline-block rounded-lg bg-[#00ADB5]/10 px-4 py-2 text-sm font-semibold text-[#00ADB5] backdrop-blur-sm">
              About CarRental
            </div>
            <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Our Journey to Excellence
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-[#EEEEEE]/80">
              Leading the way in car rental services since 2010, providing
              exceptional vehicles and outstanding customer service across the
              nation.
            </p>
          </div>
        </div>
      </section>

      <div className="container relative mx-auto px-4 py-12">
        {/* Mission & Vision */}
        <section className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="group rounded-xl border-2 border-[#00ADB5]/30 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#00ADB5]/50 hover:shadow-2xl hover:shadow-[#00ADB5]/10">
            <div className="mb-4 inline-block rounded-full border-2 border-[#00ADB5]/30 bg-[#00ADB5]/10 p-3 text-2xl text-[#00ADB5] transition-colors group-hover:border-[#00ADB5]/50 group-hover:bg-[#00ADB5]/20">
              🎯
            </div>
            <h2 className="mb-4 text-2xl font-bold text-[#222831]">
              Our Mission
            </h2>
            <p className="text-lg text-[#393E46]/80">
              To provide accessible, reliable, and hassle-free mobility
              solutions that exceed customer expectations while promoting
              sustainable transportation options.
            </p>
          </div>
          <div className="group rounded-xl border-2 border-[#00ADB5]/30 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#00ADB5]/50 hover:shadow-2xl hover:shadow-[#00ADB5]/10">
            <div className="mb-4 inline-block rounded-full border border-[#00ADB5]/20 bg-[#00ADB5]/10 p-3 text-2xl text-[#00ADB5]">
              👁️
            </div>
            <h2 className="mb-4 text-2xl font-bold text-[#222831]">
              Our Vision
            </h2>
            <p className="text-lg text-[#393E46]/80">
              To become the most trusted and innovative mobility partner,
              transforming the way people think about and access transportation.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-16 rounded-xl border-2 border-[#00ADB5]/30 bg-white/50 p-8 backdrop-blur-sm">
          <div className="mb-12 text-center">
            <div className="inline-block rounded-lg bg-[#00ADB5]/10 px-4 py-2 text-sm font-semibold text-[#00ADB5]">
              Our History
            </div>
            <h2 className="mt-4 text-3xl font-bold text-[#222831]">
              Milestones That Define Us
            </h2>
          </div>
          <div className="relative space-y-8">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className="group relative flex items-center gap-8 rounded-xl border-2 border-[#00ADB5]/20 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#00ADB5]/40 hover:shadow-xl hover:shadow-[#00ADB5]/10"
              >
                <div className="shrink-0 text-center">
                  <div className="mb-2 rounded-full bg-[#00ADB5]/10 px-4 py-2 font-bold text-[#00ADB5]">
                    {item.year}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#222831]">
                    {item.event}
                  </h3>
                  <p className="mt-2 text-[#393E46]/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16 rounded-xl border-2 border-[#00ADB5]/40 bg-[#222831] p-12 shadow-lg">
          <div className="mb-12 text-center">
            <div className="inline-block rounded-lg bg-[#00ADB5]/10 px-4 py-2 text-sm font-semibold text-[#00ADB5]">
              Our Impact
            </div>
            <h2 className="mt-4 text-3xl font-bold text-white">
              Achievements That Make Us Proud
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.label}
                className="group rounded-xl border-2 border-[#00ADB5]/30 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00ADB5]/50"
              >
                <div className="text-4xl font-bold text-[#00ADB5]">
                  {achievement.number}
                </div>
                <div className="mt-2 text-white/80">{achievement.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="mb-12 text-center">
            <div className="inline-block rounded-lg bg-[#00ADB5]/10 px-4 py-2 text-sm font-semibold text-[#00ADB5]">
              Our Team
            </div>
            <h2 className="mt-4 text-3xl font-bold text-[#222831]">
              Meet the People Behind Our Success
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-xl border-2 border-[#00ADB5]/30 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#00ADB5]/50 hover:shadow-2xl hover:shadow-[#00ADB5]/10"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="relative -mt-16 p-6">
                  <div className="rounded-xl border border-[#00ADB5]/20 bg-white p-4 shadow-lg backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-[#222831]">
                      {member.name}
                    </h3>
                    <p className="text-[#00ADB5]">{member.position}</p>
                    <p className="mt-2 text-[#393E46]/80">{member.bio}</p>
                    <div className="mt-4 flex gap-4">
                      {member.socialLinks.linkedin && (
                        <a
                          href={member.socialLinks.linkedin}
                          className="text-[#393E46] transition-colors hover:text-[#00ADB5]"
                        >
                          LinkedIn
                        </a>
                      )}
                      {member.socialLinks.twitter && (
                        <a
                          href={member.socialLinks.twitter}
                          className="text-[#393E46] transition-colors hover:text-[#00ADB5]"
                        >
                          Twitter
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
