"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { UserContextType, User, UserLogin } from "app/models/models";

// Create Context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider Component
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [registeredUsers, setRegisteredUsers] = useState<User[]>([]); // State to store all registered users
  const [currentUser, setCurrentUser] = useState<User | null>(null); // State for the currently logged-in user
  const router = useRouter();

  // Register function
  const register = (userData: User) => {
    // Check if the user is already registered
    const existingUser = registeredUsers.find(
      (user) => user.email === userData.email
    );

    if (existingUser) {
      throw new Error("This email is already registered!");
    } else {
      setRegisteredUsers((prevUsers) => [...prevUsers, userData]); // Add new user to the list
      setCurrentUser(userData); // Set as logged-in user
      router.push("/login"); // Redirect to profile
    }
  };

  // Login function
  const login = async (email: string, password: string) => {
    // Check if the email and password match a registered user
    const user = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setCurrentUser(user); // Set the matched user as logged-in
      router.push("/profile"); // Redirect to profile
    } else {
      throw new Error("Incorrect email or password!");
    }
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null); // Clear the current user
    router.push("/login"); // Redirect to login
  };

  return (
    <UserContext.Provider
      value={{ users: currentUser, login, logout, register }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook to use User Context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
