import { createSelector } from 'reselect';

const selectRaw = (state) => state.media.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const mediaDestroySelectors = {
  selectLoading,
};

export default mediaDestroySelectors;
