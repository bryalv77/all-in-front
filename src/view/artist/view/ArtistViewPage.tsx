import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/artist/view/artistViewActions';
import selectors from 'src/modules/artist/view/artistViewSelectors';
import ArtistView from 'src/view/artist/view/ArtistView';
import ArtistViewToolbar from 'src/view/artist/view/ArtistViewToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ArtistPage() {
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
          [i18n('entities.artist.menu'), '/artist'],
          [i18n('entities.artist.view.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.artist.view.title')}
        </h1>

        <ArtistViewToolbar match={match} />

        <ArtistView loading={loading} record={record} />
      </div>
    </>
  );
}

export default ArtistPage;
