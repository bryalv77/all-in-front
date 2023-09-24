import { createSelector } from 'reselect';

const selectRaw = (state) => state.conversation.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const conversationViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default conversationViewSelectors;
