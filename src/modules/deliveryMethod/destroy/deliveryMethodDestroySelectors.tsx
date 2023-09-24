import { createSelector } from 'reselect';

const selectRaw = (state) => state.deliveryMethod.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const deliveryMethodDestroySelectors = {
  selectLoading,
};

export default deliveryMethodDestroySelectors;
