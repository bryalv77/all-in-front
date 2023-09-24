import { createSelector } from 'reselect';

const selectRaw = (state) => state.bank.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const bankDestroySelectors = {
  selectLoading,
};

export default bankDestroySelectors;
