import { Bounce, toast } from "react-toastify"; // Make sure this is imported
import { getData, setData } from "../localstorage"; // Assuming getData and setData are working with localStorage
import { useNavigate } from "react-router";

export const login = async (email, password) => {
  let users = await getData("users");
  if (!users || users.length === 0) {
    return "No users found. Please sign up first.";
  }
  const isPresent = users.some((user) => user.email === email);
  const user = users.find(
    (item) => item.email === email && item.password === password
  );
  if (isPresent) {
    if (user) {
      await setData("currentUser", user);
      window.location.href = "/";
      toast.success("Login Successful.");
    } else {
      toast.error("Wrong Credentials.");
    }
  } else {
    toast.error("User not registered");
  }
};

export const signup = async (userData) => {
  try {
    let users = await getData("users");

    // If no users are found, initialize the users array
    if (users == null) {
      await setData("users", []);
      users = []; // Reassign to an empty array after initialization
    }

    // Check if the user already exists based on email
    const isPresent = users.some((user) => user.email === userData.email);

    if (!isPresent) {
      let user_data = {
        userId: users.length > 0 ? "USER_" + users.length : "USER_0", // User ID based on the existing length
        bookings: [], // Default Bookings are empty.
        ...userData, // Merge the form data
      };

      // Add the new user to the users array
      users.push(user_data);

      // Store updated users array and set the current user in local storage
      await setData("users", users);
      await setData("currentUser", user_data);

      // Provide success feedback
      toast.success("Registration Successful.");
      window.location.href = "/";
    } else {
      // If the user already exists, show a failure message
      toast.error("User already registered.");
    }
  } catch (error) {
    // Handle any errors
    console.error("Error during signup:", error);
    toast.error("An error occurred. Please try again.");
  }
};

export const logout = async () => {
  await setData("currentUser", null);
  window.location.href = "/";
  toast.success("Logout done.");
};

export const bookMovie = async (movieDetails) => {
  try {
    // Retrieve the current user and users array from storage
    const currentUser = await getData("currentUser");
    const users = await getData("users");

    if (!currentUser || !users) {
      toast.error("No user is logged in or users data is unavailable.");
      return;
    }

    // Add the new booking to the current user's bookings
    currentUser.bookings.push(movieDetails);

    // Update the users array with the updated user data
    const updatedUsers = users.map((user) =>
      user.userId === currentUser.userId ? currentUser : user
    );

    // Save the updated data to storage
    await setData("users", updatedUsers);
    await setData("currentUser", currentUser);

    // Provide success feedback
    toast.success("Movie booked successfully!");
  } catch (error) {
    console.error("Error booking movie:", error);
    toast.error("An error occurred while booking the movie. Please try again.");
  }
};

export  function isLogin() {
  const currentUser =  getData("currentUser");
  if (currentUser == null) {
    return false;
  } else {
    return true;
  }
}
