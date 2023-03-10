import { pop, hipHop, dance, electronic, soul, alternative, rock, latin, film, country, worldwide, kPop } from '../assets/genreImages';

export const SHAZAM_CORE_API_URL = 'https://shazam-core.p.rapidapi.com/v1';
export const SHAZAM_CORE_API_HOST = 'shazam-core.p.rapidapi.com';

export const genreImages = [ pop, hipHop, dance, electronic, soul, alternative, rock, latin, film, country, worldwide, kPop ];

export const allGenresWithColors = {
  POP: ['Pop', 'linear-gradient(to bottom, #de6161, #2657eb)'],
  HIP_HOP_RAP: ['Hip-Hop', 'linear-gradient(to bottom, #f7ff00, #db36a4)'],
  DANCE: ['Dance', 'linear-gradient(to bottom, #dd3e54, #6be585)'],
  ELECTRONIC: ['Electronic', 'linear-gradient(to bottom, #5433ff, #20bdff, #a5fecb)'],
  SOUL_RNB: ['Soul', 'linear-gradient(to bottom, #ef32d9, #89fffd)'],
  ALTERNATIVE: ['Alternative', 'linear-gradient(to bottom, #fc354c, #0abfbc)'],
  ROCK: ['Rock', 'linear-gradient(to bottom, #b92b27, #1565c0)'],
  LATIN: ['Latin', 'linear-gradient(to bottom, #333333, #dd1818)'],
  FILM_TV: ['Film', 'linear-gradient(to bottom, #0052d4, #4364f7, #6fb1fc)'],
  COUNTRY: ['Country', 'linear-gradient(to bottom, #f0c27b, #4b1248)'],
  WORLDWIDE: ['Worldwide', 'linear-gradient(to bottom, #00f260, #0575e6)'],
  K_POP: ['K-Pop', 'linear-gradient(to bottom, #fffbd5, #b20a2c)'],
};

export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  blacks: {
    100: 'hsl(0deg 0% 0%)',
    200: 'hsl(0deg 0% 12%)',
    300: 'hsl(0deg 0% 18%)',
    400: 'hsl(0deg 0% 28%)',
  },
  grays: {
    100: 'hsl(0deg 0% 60%)',
    200: 'hsl(0deg 0% 80%)',
  },
  gradients: {
    gold: `radial-gradient(
      ellipse farthest-corner at right bottom,
      hsl(49deg 99% 61%) 0%,
      hsl(40deg 98% 59%) 8%,
      hsl(41deg 60% 39%) 30%,
      hsl(42deg 49% 36%) 40%,
      transparent 80%
    ),
    radial-gradient(
      ellipse farthest-corner at left top,
      hsl(0deg 0% 100%) 0%,
      hsl(60deg 100% 84%) 8%,
      hsl(44deg 54% 61%) 25%,
      hsl(42deg 50% 24%) 62.5%,
      hsl(42deg 50% 24%) 100%
    )`,
    goldLight: `radial-gradient(
      ellipse farthest-corner at center,
      hsl(49deg 99% 41%) 0%,
      hsl(40deg 98% 49%) 8%,
      hsl(41deg 60% 89%) 30%,
      hsl(42deg 49% 56%) 40%,
      transparent 80%
    ),
    radial-gradient(
      ellipse farthest-corner at left top,
      hsl(0deg 0% 100%) 0%,
      hsl(60deg 100% 94%) 8%,
      hsl(44deg 54% 71%) 25%,
      hsl(42deg 50% 44%) 62.5%,
      hsl(42deg 50% 54%) 100%
    )`,
    goldTransparent: `radial-gradient(
      ellipse farthest-corner at right bottom,
      hsl(49deg 99% 61% /0.5) 0%,
      hsl(40deg 98% 59% /0.5) 8%,
      hsl(41deg 60% 39% /0.5) 30%,
      hsl(42deg 49% 36% /0.5) 40%,
      transparent 80%
    ),
    radial-gradient(
      ellipse farthest-corner at left top,
      hsl(0deg 0% 100% /0.5) 0%,
      hsl(60deg 100% 84% /0.5) 8%,
      hsl(44deg 54% 61% /0.5) 25%,
      hsl(42deg 50% 24% /0.5) 62.5%,
      hsl(42deg 50% 24% /0.5) 100%
    )`,
    goldVeryTransparent: `radial-gradient(
      ellipse farthest-corner at right bottom,
      hsl(49deg 99% 61% /0.15) 0%,
      hsl(40deg 98% 59% /0.15) 8%,
      hsl(41deg 60% 39% /0.15) 30%,
      hsl(42deg 49% 36% /0.15) 40%,
      transparent 80%
    ),
    radial-gradient(
      ellipse farthest-corner at left top,
      hsl(0deg 0% 100% /0.15) 0%,
      hsl(60deg 100% 84% /0.15) 8%,
      hsl(44deg 54% 61% /0.15) 25%,
      hsl(42deg 50% 24% /0.15) 62.5%,
      hsl(42deg 50% 24% /0.15) 100%
    )`,
    blackLeft: 'linear-gradient(to left, hsl(0deg 0% 12%) 0%, black 100%)',
    blackRight: 'linear-gradient(to right, hsl(0deg 0% 12%) 0%, black 100%)',
  },
};

const BREAKPOINTS = {
  largeDevice: 1525,
  mediumLarge: 1280,
  medium: 900,
  small: 580,
  smallMedium: 450,
  verySmall: 350,
};

export const QUERIES = {
  largeAndDown: `max-width: ${BREAKPOINTS.largeDevice}px`,
  mediumLargeAndDown: `max-width: ${BREAKPOINTS.mediumLarge}px`,
  mediumAndDown: `max-width: ${BREAKPOINTS.medium}px`,
  smallAndDown: `max-width: ${BREAKPOINTS.small}px`,
  smallMediumAndDown: `max-width: ${BREAKPOINTS.smallMedium}px`,
  verySmallAndDown: `max-width: ${BREAKPOINTS.verySmall}px`,
};

export const JSQueries = {
  largeAndDown() {
    return globalThis.window?.matchMedia(`(${QUERIES.largeAndDown})`).matches;
  },
  mediumLargeAndDown() {
    return globalThis.window?.matchMedia(`(${QUERIES.mediumLargeAndDown})`).matches;
  },
  mediumAndDown() {
    return globalThis.window?.matchMedia(`(${QUERIES.mediumAndDown})`).matches;
  },
  smallAndDown() {
    return globalThis.window?.matchMedia(`(${QUERIES.smallAndDown})`).matches;
  },
};
