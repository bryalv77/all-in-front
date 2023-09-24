import authAxios from '../../../modules/shared/axios/authAxios';
import AuthCurrentTenant from '../../../modules/auth/authCurrentTenant';

export default class PlanService {
  static async fetchCheckoutSessionId(plan) {
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.post(
      `/tenant/${tenantId}/plan/stripe/checkout`,
      {
        plan,
      },
    );

    return response.data.id;
  }

  static async fetchPortalUrl() {
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.post(
      `/tenant/${tenantId}/plan/stripe/portal`,
    );

    return response.data.url;
  }
}
