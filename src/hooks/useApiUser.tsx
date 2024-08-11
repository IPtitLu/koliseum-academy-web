import { useState } from 'react';

interface User {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string; // Ajout du champ password
}

interface ApiError {
  message: string;
}

interface LoginResponse {
  token: string;
}

// URL de base pour les requêtes API
const BASE_URL = 'http://localhost:3333';

export const useApiUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<ApiError | null>(null);

  const getToken = () => {
    return localStorage.getItem('token');
  };

  // Login user (POST to /auth)
  const login = async (email: string, password: string) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) throw new Error('Failed to login');
      const data: LoginResponse = await response.json();
      localStorage.setItem('token', data.token);
    } catch (err) {
      setError({ message: (err as Error).message });
    }
  };

  // Fetch all users (GET)
  const fetchUsers = async () => {
    try {
      const token = getToken();
      const response = await fetch(`${BASE_URL}/user/`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError({ message: (err as Error).message });
    }
  };

  // Fetch a single user by ID (GET)
  const fetchUserById = async (id: string) => {
    try {
      const token = getToken();
      const response = await fetch(`${BASE_URL}/user/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error('Failed to fetch user');
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError({ message: (err as Error).message });
    }
  };

  // Create a new user (POST)
  const createUser = async (newUser: User) => {
    try {
      const token = getToken();
      const response = await fetch(`${BASE_URL}/user/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) throw new Error('Failed to create user');
      const data = await response.json();
      setUsers([...users, data]);
      return true;
    } catch (err) {
      setError({ message: (err as Error).message });
      return false;
    }
  };

  // Update an existing user (PUT)
  const updateUser = async (id: string, updatedUser: User) => {
    try {
      const token = getToken();
      const response = await fetch(`${BASE_URL}/user/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(updatedUser),
      });
      if (!response.ok) throw new Error('Failed to update user');
      const data = await response.json();
      setUsers(users.map((user) => (user.id === id ? data : user)));
    } catch (err) {
      setError({ message: (err as Error).message });
    }
  };

  return {
    users,
    user,
    error,
    login,
    fetchUsers,
    fetchUserById,
    createUser,
    updateUser,
  };
};
