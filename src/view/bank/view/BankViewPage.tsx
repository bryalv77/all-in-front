import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/bank/view/bankViewActions';
import selectors from 'src/modules/bank/view/bankViewSelectors';
import BankView from 'src/view/bank/view/BankView';
import BankViewToolbar from 'src/view/bank/view/BankViewToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function BankPage() {
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
          [i18n('entities.bank.menu'), '/bank'],
          [i18n('entities.bank.view.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.bank.view.title')}
        </h1>

        <BankViewToolbar match={match} />

        <BankView loading={loading} record={record} />
      </div>
    </>
  );
}

export default BankPage;
