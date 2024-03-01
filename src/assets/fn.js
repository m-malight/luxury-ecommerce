const API_KEY = import.meta.env.VITE_API_KEY;
import { createClient } from "pexels";

const client = createClient(API_KEY);

export default async function get_photos(query, per_page = 11) {
  const { photos } = await client.photos.search({
    query,
    per_page,
  });
  return photos;
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
