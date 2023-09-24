import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/song/view/songViewActions';
import selectors from 'src/modules/song/view/songViewSelectors';
import SongView from 'src/view/song/view/SongView';
import SongViewToolbar from 'src/view/song/view/SongViewToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function SongPage() {
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
          [i18n('entities.song.menu'), '/song'],
          [i18n('entities.song.view.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.song.view.title')}
        </h1>

        <SongViewToolbar match={match} />

        <SongView loading={loading} record={record} />
      </div>
    </>
  );
}

export default SongPage;
