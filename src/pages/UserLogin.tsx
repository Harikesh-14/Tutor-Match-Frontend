import { Link } from "react-router-dom"

function UserLogin() {
  return (
    <main className="flex flex-col md:flex-row gap-4">
      <div className="hidden md:flex items-center h-screen">
        <img
          src="/userLoginImage.jpg"
          alt="The image"
          className="md:w-[45rem] h-screen fixed"
        />
      </div>

      <div
        className="pl-[50rem] py-16 flex flex-col gap-4 items-center justify-center overflow-y-auto"
      >
        <h1 
          className="text-4xl font-bold text-[#42727B] text-center mb-6"
        >
          Login
        </h1>
        <form
          className="flex flex-col gap-4 md:w-[40rem]"
          method="POST"
        >
          <div className="flex gap-2 items-center">
            <label htmlFor="email" className="w-32 text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>

          <div className="flex gap-2 items-center">
            <label htmlFor="password" className="w-32 text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>

          <div 
            className="flex justify-center mt-4"
          >
            <button
              type="submit"
              className="bg-gradient-to-r from-[#42727B] to-[#89B76C] text-white p-4 rounded-full w-52 font-bold text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none"
            >
              Register
            </button>
          </div>

          <div
            className="flex justify-center gap-2 mt-4"
          >
            <p className="text-sm">
              Don't have an account? <Link to="/user/login" className="text-[#42727B] hover:underline">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  )
}

export default UserLogin