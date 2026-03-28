export interface Anime {
  mal_id: number;
  title: string;
  title_english: string;
  title_japanese: string;
  url: string;
  images: { jpg: { image_url: string } };
  score: number;
  type: string; // TV, Movie, OVA, etc.
  genres: { mal_id: number; name: string }[];
}
