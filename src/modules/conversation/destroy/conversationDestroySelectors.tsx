import { createSelector } from 'reselect';

const selectRaw = (state) => state.conversation.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const conversationDestroySelectors = {
  selectLoading,
};

export default conversationDestroySelectors;
