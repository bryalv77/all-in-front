import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from '../../../i18n';
import actions from '../../../modules/courseProgress/view/courseProgressViewActions';
import selectors from '../../../modules/courseProgress/view/courseProgressViewSelectors';
import CourseProgressView from '../../../view/courseProgress/view/CourseProgressView';
import CourseProgressViewToolbar from '../../../view/courseProgress/view/CourseProgressViewToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function CourseProgressPage() {
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
          [
            i18n('entities.courseProgress.menu'),
            '/course-progress',
          ],
          [i18n('entities.courseProgress.view.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.courseProgress.view.title')}
        </h1>

        <CourseProgressViewToolbar match={match} />

        <CourseProgressView
          loading={loading}
          record={record}
        />
      </div>
    </>
  );
}

export default CourseProgressPage;
