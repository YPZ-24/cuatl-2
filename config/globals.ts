const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN;
const PAGE_LIMIT = 12;
console.log("API")
console.log(API_DOMAIN)

const AUTH_FACEBOOK_CALLBACK = `${API_DOMAIN}/auth/facebook/callback`;
const AUTH_FACEBOOK_URL = `${API_DOMAIN}/connect/facebook`;
const AUTH_GOOGLE_CALLBACK = `${API_DOMAIN}/auth/google/callback`;
const AUTH_GOOGLE_URL = `${API_DOMAIN}/connect/google`;

const STRIPE_PUBLISHED_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHED_KEY;

export {
  API_DOMAIN,
  PAGE_LIMIT,
  AUTH_FACEBOOK_CALLBACK,
  AUTH_FACEBOOK_URL,
  AUTH_GOOGLE_CALLBACK,
  AUTH_GOOGLE_URL,
  STRIPE_PUBLISHED_KEY
};
