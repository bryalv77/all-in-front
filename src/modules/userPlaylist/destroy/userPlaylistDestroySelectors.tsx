import { createSelector } from 'reselect';

const selectRaw = (state) => state.userPlaylist.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const userPlaylistDestroySelectors = {
  selectLoading,
};

export default userPlaylistDestroySelectors;
