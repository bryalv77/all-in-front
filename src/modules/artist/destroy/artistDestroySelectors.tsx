import { createSelector } from 'reselect';

const selectRaw = (state) => state.artist.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const artistDestroySelectors = {
  selectLoading,
};

export default artistDestroySelectors;
