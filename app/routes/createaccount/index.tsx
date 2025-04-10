export default function CreateAccount() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-400 dark:bg-gray-800">
      <div className="flex w-full max-w-6xl">
        <div
          className="w-1/2 h-auto bg-gray-400 dark:bg-gray-800 bg-cover rounded-l-lg"
          style={{ backgroundImage: "url('/Chainsaw Man/makima.jpg')" }}
        ></div>

        <div className="w-full lg:w-7/12 bg-white dark:bg-white p-5 bg-cover mx-auto"
          style={{ backgroundImage: "url('/Chainsaw Man/cmbackground.jpg')" }}
          >
            <h3 className="py-4 text-2xl text-center font-bold text-white dark:text-orange-500" style={{ textShadow: "2px 2px 4px rgba(34, 34, 34, 0.8)" }}>
            Create an Account!
            </h3>
          <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded-md max-w-lg mx-auto">
            <div className="mb-4 md:flex md:justify-between ani">
              <div className="mb-4 md:mr-2 md:mb-0 animat">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-black border border-gray-300 dark:border-gray-600 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-black border border-gray-300 dark:border-gray-600 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border border-gray-300 dark:border-gray-600 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border border-gray-300 dark:border-gray-600 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
                <p className="text-xs italic text-red-500">
                  Please choose a password.
                </p>
              </div>
              <div className="md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                  htmlFor="c_password"
                >
                  Confirm Password
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border border-gray-300 dark:border-gray-600 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="c_password"
                  type="password"
                  placeholder="******************"
                />
              </div>
            </div>
            <div className="mb-6 text-center">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-orange-600 dark:text-white dark:hover:bg-orange-700 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Register Account
              </button>
            </div>
            <hr className="mb-6 border-t" />
            <div className="text-center">
              <a
                className="inline-block text-sm text-orange-500 dark:text-orange-500 align-baseline hover:text-orange-700"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div className="text-center">
              <a
                className="inline-block text-sm text-orange-500 dark:text-orange-500 align-baseline hover:text-orange-700"
                href="/signin"
              >
                Already have an account? Login!
              </a>
            </div>
          </form>
        </div>

        <div
          className="w-1/2 h-auto bg-gray-400 dark:bg-gray-800 bg-cover rounded-r-lg "
          style={{ backgroundImage: "url('/Chainsaw Man/cmasa.jpg')" }}
        ></div>
      </div>
    </div>
  );
}
