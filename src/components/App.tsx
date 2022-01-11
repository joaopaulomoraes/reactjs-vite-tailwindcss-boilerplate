import Avatar from 'components/Avatar'

function App() {
  return (
    <div className="bg-white">
      <div className="py-16 px-4 mx-auto max-w-screen-xl sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">
            Welcome to
          </h2>
          <p className="my-3 text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            reactjs-vite-tailwindcss-boilerplate
          </p>
          <p className="text-xl text-gray-400">Start building for free.</p>
          <p className="mt-5">
            <Avatar
              size="large"
              src="https://www.gravatar.com/avatar/4405735f6f3129e0286d9d43e7b460d0"
            />
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
