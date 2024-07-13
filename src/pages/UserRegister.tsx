function UserRegister() {
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
          Register
        </h1>
        <form
          className="flex flex-col gap-4 md:w-[40rem]"
          method="POST"
        >
          <div className="flex gap-2 items-center">
            <label htmlFor="firstName" className="w-32 text-gray-600">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>

          <div className="flex gap-2 items-center">
            <label htmlFor="lastName" className="w-32 text-gray-600">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>

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
            <label htmlFor="phone" className="w-32 text-gray-600">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>

          <div className="flex gap-2 items-center">
            <label htmlFor="gender" className="w-32 text-gray-600">Gender</label>
            <select id="gender" className="w-full p-2 border border-gray-300 rounded focus:outline-none">
              <option value="gender">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex gap-2 items-center">
            <label htmlFor="dob" className="w-32 text-gray-600">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              placeholder="Date of Birth"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>

          <div className="flex gap-2 items-center">
            <label htmlFor="profilePic" className="w-32 text-gray-600">Upload your photo</label>
            <input type="file" id="profilePic" name="profilePic" />
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

          <div className="flex gap-2 items-center mt-6">
            <input
              type="checkbox"
              id="term&conds"
              name="term&conds"
              className="w-4 h-4 border rounded focus:outline-none"
            />

            <p className="text-sm">
              I agree to the terms and conditions
            </p>
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
              Already have an account? <a href="/user/login" className="text-[#42727B] hover:underline">Login</a>
            </p>
          </div>

          <div
            className="flex flex-col justify-center items-center gap-2 mt-4"
          >
            <p>
              Or sign up with
            </p>
            <div
              className="flex gap-6"
            >
              <img
                src="/google.webp"
                alt="Google"
                className="w-14 h-14 rounded-full bg-white shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out transform hover:shadow-xl"
              />
              <img
                src="/apple.png"
                alt="Apple"
                className="w-14 h-14 p-2 rounded-full bg-white shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out transform hover:shadow-xl"
              />
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default UserRegister