import { createSelector } from 'reselect';

const selectRaw = (state) => state.brand.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const brandDestroySelectors = {
  selectLoading,
};

export default brandDestroySelectors;
