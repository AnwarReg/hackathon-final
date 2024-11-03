import axios from 'axios';

const supabaseUrl = 'https://nuzqbybgkaxmnfbdufng.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51enFieWJna2F4bW5mYmR1Zm5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1OTY3NDksImV4cCI6MjA0NjE3Mjc0OX0.PBqr-fbEOi1pW7ZlZyBNNHG5Gyr_4W8_a0DDMgI90-g';

const axiosClient = axios.create({
  baseURL: `${supabaseUrl}/rest/v1`,
  headers: {
    apiKey: supabaseAnonKey,
    Authorization: `Bearer ${supabaseAnonKey}`,
    'Content-Type': 'application/json',
  },
});

export default axiosClient;