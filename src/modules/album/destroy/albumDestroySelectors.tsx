import { createSelector } from 'reselect';

const selectRaw = (state) => state.album.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const albumDestroySelectors = {
  selectLoading,
};

export default albumDestroySelectors;
