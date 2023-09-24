import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from '../../../i18n';
import actions from '../../../modules/hashtag/view/hashtagViewActions';
import selectors from '../../../modules/hashtag/view/hashtagViewSelectors';
import HashtagView from '../../../view/hashtag/view/HashtagView';
import HashtagViewToolbar from '../../../view/hashtag/view/HashtagViewToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function HashtagPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.hashtag.menu'), '/hashtag'],
          [i18n('entities.hashtag.view.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.hashtag.view.title')}
        </h1>

        <HashtagViewToolbar match={match} />

        <HashtagView loading={loading} record={record} />
      </div>
    </>
  );
}

export default HashtagPage;
