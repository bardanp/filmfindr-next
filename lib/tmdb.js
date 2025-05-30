/**
 * TMDB API utility functions
 * Uses the server-side API routes to make secure requests
 */

// Main fetch function for TMDB data
export async function fetchTMDB(endpoint, params = {}) {
  try {
    // Build URL with endpoint and params
    const url = new URL('/api/tmdb', window.location.origin);
    url.searchParams.append('endpoint', endpoint);
    
    // Add any additional params
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, value);
      }
    });

    const response = await fetch(url.toString());
    
    if (!response.ok) {
      throw new Error(`Error fetching from TMDB: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('TMDB fetch error:', error);
    throw error;
  }
}

// Popular functions to get common data types

// Get trending movies
export async function getTrending(timeWindow = 'day', mediaType = 'movie') {
  return fetchTMDB(`/trending/${mediaType}/${timeWindow}`);
}

// Search movies
export async function searchMovies(query, page = 1) {
  return fetchTMDB('/search/movie', { query, page });
}

// Get movie details
export async function getMovieDetails(movieId) {
  return fetchTMDB(`/movie/${movieId}`, { 
    append_to_response: 'credits,videos,similar,recommendations' 
  });
}

// Get movie recommendations
export async function getRecommendations(movieId, page = 1) {
  return fetchTMDB(`/movie/${movieId}/recommendations`, { page });
}

// Get movies by genre
export async function getMoviesByGenre(genreId, page = 1) {
  return fetchTMDB('/discover/movie', { 
    with_genres: genreId,
    page 
  });
}

// Get top rated movies
export async function getTopRated(page = 1) {
  return fetchTMDB('/movie/top_rated', { page });
}

// Get upcoming movies
export async function getUpcoming(page = 1) {
  return fetchTMDB('/movie/upcoming', { page });
}

// Get now playing movies
export async function getNowPlaying(page = 1) {
  return fetchTMDB('/movie/now_playing', { page });
}

// Get popular movies
export async function getPopular(page = 1) {
  return fetchTMDB('/movie/popular', { page });
}

// Get movie genres list
export async function getGenres() {
  return fetchTMDB('/genre/movie/list');
}

// Helper to create a poster image URL
export function getPosterUrl(path, size = 'w500') {
  if (!path) return '/placeholders/poster-placeholder.jpg';
  return `https://image.tmdb.org/t/p/${size}${path}`;
}

// Helper to create a backdrop image URL
export function getBackdropUrl(path, size = 'w1280') {
  if (!path) return '/placeholders/backdrop-placeholder.jpg';
  return `https://image.tmdb.org/t/p/${size}${path}`;
}

// Helper to format TMDB movie data for display
export function formatMovieData(movie) {
  return {
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    poster: movie.poster_url || getPosterUrl(movie.poster_path),
    backdrop: movie.backdrop_url || getBackdropUrl(movie.backdrop_path),
    releaseYear: movie.release_date ? new Date(movie.release_date).getFullYear() : 'Unknown',
    releaseDate: movie.release_date,
    genres: movie.genres ? movie.genres.map(g => g.name).join(', ') : '',
    genreIds: movie.genre_ids || (movie.genres ? movie.genres.map(g => g.id) : []),
    rating: movie.vote_average ? (movie.vote_average / 2).toFixed(1) : 'N/A', // Convert to 5-star scale
    popularity: movie.popularity,
    runtime: movie.runtime ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` : 'N/A',
    voteCount: movie.vote_count,
  };
} 