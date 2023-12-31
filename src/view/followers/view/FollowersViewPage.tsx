import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from '../../../i18n';
import actions from '../../../modules/followers/view/followersViewActions';
import selectors from '../../../modules/followers/view/followersViewSelectors';
import FollowersView from '../../../view/followers/view/FollowersView';
import FollowersViewToolbar from '../../../view/followers/view/FollowersViewToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function FollowersPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id) as any);
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.followers.menu'), '/followers'],
          [i18n('entities.followers.view.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.followers.view.title')}
        </h1>

        <FollowersViewToolbar match={match} />

        <FollowersView loading={loading} record={record} />
      </div>
    </>
  );
}

export default FollowersPage;
