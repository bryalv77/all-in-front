import { createSelector } from 'reselect';

const selectRaw = (state) => state.promotions.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const promotionsDestroySelectors = {
  selectLoading,
};

export default promotionsDestroySelectors;
