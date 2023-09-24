import { createSelector } from 'reselect';

const selectRaw = (state) => state.song.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const songDestroySelectors = {
  selectLoading,
};

export default songDestroySelectors;
