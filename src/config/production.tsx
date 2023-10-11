// Place the URL here with the /api suffix.
// Ex.:`https://domain.com/api`;
const backendUrl = `https://all-in-back-production.up.railway.app/api`;

// SwaggerUI Documentation URL
// Leave black if documentation should be hidden
const apiDocumentationUrl = `https://all-in-back-production.up.railway.app/documentation`;

/**
 * Frontend URL.
 */
const frontendUrl = {
  host: 'domain.com',
  protocol: 'https',
};

/**
 * Tenant Mode
 * multi: Allow new users to create new tenants.
 * multi-with-subdomain: Same as multi, but enable access to the tenant via subdomain.
 * single: One tenant, the first user to register will be the admin.
 */
const tenantMode = 'multi';

/**
 * Plan payments configuration.
 */
const isPlanEnabled = true;
const stripePublishableKey =
  'pk_test_51NuPKuInU8XBH4eAMULux5H97RDW85XKEHiml3aK2S0wQUyC62aUToKnwMC5YiKoyTvUWpwIxDw4UW5f6hGZGvly00lwEsmeDS';

export default {
  frontendUrl,
  backendUrl,
  apiDocumentationUrl,
  tenantMode,
  isPlanEnabled,
  stripePublishableKey,
};
