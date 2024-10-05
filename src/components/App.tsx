import Avatar from 'components/Avatar';
import logo from 'assets/logo.svg';

const randoms = [
  [1, 2],
  [3, 4, 5],
  [6, 7]
];

function App() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-indigo-50">
      <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <div className="my-4">
              <Avatar size="large" src={logo} />
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-800 sm:text-7xl drop-shadow-lg">
              Hi, I’m Maryam
            </h1>
            <p className="mt-6 text-lg text-gray-600 font-light leading-relaxed">
              This is a boilerplate built with Vite, React 18, TypeScript, Vitest, Testing Library, TailwindCSS 3, ESLint, and Prettier.
            </p>
          </div>
          <div className="my-10">
            <a
              href="vscode://"
              className="inline-block rounded-lg border border-transparent bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 px-8 py-3 text-lg font-semibold text-white hover:scale-105 hover:shadow-xl transition-all transform duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
            >
              Start building for free
            </a>
            <div
              aria-hidden="true"
              className="pointer-events-none mt-10 md:mt-0 lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div className="absolute sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  {randoms.map((random, index) => (
                    <div
                      key={`random-${index}`}
                      className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                    >
                      {random.map((number) => (
                        <div
                          key={`random-${number}`}
                          className="h-64 w-44 overflow-hidden rounded-lg transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:brightness-110"
                        >
                          <img
                            src={`https://picsum.photos/600?random=${number}`}
                            alt=""
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
