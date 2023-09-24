import { createSelector } from 'reselect';

const selectRaw = (state) => state.paymentMethods.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const paymentMethodsDestroySelectors = {
  selectLoading,
};

export default paymentMethodsDestroySelectors;
