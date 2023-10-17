// src/api.js
export async function fetchRandomUser() {
    try {
      const response = await fetch('https://randomuser.me/api/');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data.results[0];
    } catch (error) {
      throw error;
    }
  }
  