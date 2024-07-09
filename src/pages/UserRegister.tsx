function UserRegister() {
  return (
    <main>
      <div>
        <img src="" alt="" />
      </div>

      <div>
        <h1>Register</h1>
        <form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" placeholder="First Name"/>
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" placeholder="Last Name"/>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email"/>
          </div>

          <div>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Phone Number"/>
          </div>

          <div>
            <label htmlFor="gender">Gender</label>
            <select id="gender">
              <option value="gender">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob"/>
          </div>

          <div>
            <label htmlFor="profilePic">Upload your photo</label>
            <input type="file" id="profilePic" name="profilePic"/>
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password"/>
          </div>
        </form>
      </div>
    </main>
  )
}

export default UserRegister