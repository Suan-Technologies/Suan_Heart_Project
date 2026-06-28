/** =============================================================================
 * App Configuration File
 * =============================================================================
 * App-level settings jaise app name, version, feature flags, limits, etc.
 * ============================================================================= */

export const APP_NAME = 'TrustBond';
export const APP_VERSION = import.meta.env.VITE_APP_VERSION || '1.0.0';
export const APP_TAGLINE = 'Find Your Perfect Match';

// ─── Feature Flags ─────────────────────────────────────────────────────────
export const FEATURE_FLAGS = {
  enablePushNotifications: true,
  enableInAppCalling: false,       // Future feature
  enableVideoProfiles: false,      // Future feature
  enableDarkMode: true,
  enableBiometricAuth: false,      // Future feature
  enableReferralSystem: false,     // Future feature
} as const;

// ─── Limits / Quotas (Free Tier) ─────────────────────────────────────────
export const FREE_TIER_LIMITS = {
  dailyLikes: 10,
  dailyChats: 5,
  monthlyBoosts: 0,
  maxPhotos: 3,
  maxFilters: 2,
} as const;

// ─── Limits / Quotas (Silver) ──────────────────────────────────────────────
export const SILVER_TIER_LIMITS = {
  dailyLikes: 50,
  dailyChats: 20,
  monthlyBoosts: 2,
  maxPhotos: 6,
  maxFilters: 5,
} as const;

// ─── Limits / Quotas (Gold) ────────────────────────────────────────────────
export const GOLD_TIER_LIMITS = {
  dailyLikes: Infinity,
  dailyChats: Infinity,
  monthlyBoosts: 5,
  maxPhotos: 9,
  maxFilters: Infinity,
} as const;

// ─── Limits / Quotas (Platinum) ────────────────────────────────────────────
export const PLATINUM_TIER_LIMITS = {
  dailyLikes: Infinity,
  dailyChats: Infinity,
  monthlyBoosts: 10,
  maxPhotos: 15,
  maxFilters: Infinity,
  prioritySupport: true,
} as const;

// ─── Age / Validation Constants ───────────────────────────────────────────
export const MIN_AGE = 18;
export const MAX_AGE = 80;
export const MAX_BIO_LENGTH = 500;
export const MAX_MESSAGE_LENGTH = 1000;

// ─── Photo / Media ─────────────────────────────────────────────────────────
export const MEDIA_CONFIG = {
  maxPhotoSizeMB: 10,
  allowedPhotoTypes: ['image/jpeg', 'image/png', 'image/webp'],
  maxVideoDurationSec: 60,
  photoAspectRatio: 3 / 4,         // Portrait preferred
} as const;

// ─── Pagination ───────────────────────────────────────────────────────────
export const DEFAULT_PAGINATION = {
  page: 1,
  limit: 20,
  maxLimit: 100,
} as const;

// ─── Toast / Notification Durations ────────────────────────────────────────
export const TOAST_DURATION = {
  success: 3000,
  error: 5000,
  info: 4000,
  warning: 4500,
} as const;

// ─── Social Share Links ────────────────────────────────────────────────────
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/trustbond',
  twitter:   'https://twitter.com/trustbond',
  facebook:  'https://facebook.com/trustbond',
  support:   'https://support.trustbond.app',
  privacy:   'https://trustbond.app/privacy',
  terms:     'https://trustbond.app/terms',
} as const;

// ─── Default Export ────────────────────────────────────────────────────────
const APP_CONFIG = {
  APP_NAME,
  APP_VERSION,
  APP_TAGLINE,
  FEATURE_FLAGS,
  FREE_TIER_LIMITS,
  SILVER_TIER_LIMITS,
  GOLD_TIER_LIMITS,
  PLATINUM_TIER_LIMITS,
  MIN_AGE,
  MAX_AGE,
  MAX_BIO_LENGTH,
  MAX_MESSAGE_LENGTH,
  MEDIA_CONFIG,
  DEFAULT_PAGINATION,
  TOAST_DURATION,
  SOCIAL_LINKS,
} as const;

export default APP_CONFIG;
