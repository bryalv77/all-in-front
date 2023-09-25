import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from '../../../i18n';
import actions from '../../../modules/categoryCourseRelation/form/categoryCourseRelationFormActions';
import selectors from '../../../modules/categoryCourseRelation/form/categoryCourseRelationFormSelectors';
import { getHistory } from '../../../modules/store';
import CategoryCourseRelationForm from '../../../view/categoryCourseRelation/form/CategoryCourseRelationForm';
import Breadcrumb from '../../../view/shared/Breadcrumb';
import Spinner from '../../../view/shared/Spinner';

function CategoryCourseRelationFormPage(props) {
  const [dispatched, setDispatched] = useState(false);
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const initLoading = useSelector(
    selectors.selectInitLoading,
  );
  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );
  const record = useSelector(selectors.selectRecord);

  const isEditing = Boolean(match.params.id);
  const title = isEditing
    ? i18n('entities.categoryCourseRelation.edit.title')
    : i18n('entities.categoryCourseRelation.new.title');

  useEffect(() => {
    dispatch(actions.doInit(match.params.id) as any);
    setDispatched(true);
  }, [dispatch, match.params.id]);

  const doSubmit = (id, data) => {
    if (isEditing) {
      dispatch(actions.doUpdate(id, data) as any);
    } else {
      dispatch(actions.doCreate(data) as any);
    }
  };

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [
            i18n('entities.categoryCourseRelation.menu'),
            '/category-course-relation',
          ],
          [title],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {title}
        </h1>

        {initLoading && <Spinner />}

        {dispatched && !initLoading && (
          <CategoryCourseRelationForm
            saveLoading={saveLoading}
            initLoading={initLoading}
            record={record}
            isEditing={isEditing}
            onSubmit={doSubmit}
            onCancel={() =>
              getHistory().push('/category-course-relation')
            }
          />
        )}
      </div>
    </>
  );
}

export default CategoryCourseRelationFormPage;
