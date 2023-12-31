import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from '../../../i18n';
import actions from '../../../modules/paymentMethods/view/paymentMethodsViewActions';
import selectors from '../../../modules/paymentMethods/view/paymentMethodsViewSelectors';
import PaymentMethodsView from '../../../view/paymentMethods/view/PaymentMethodsView';
import PaymentMethodsViewToolbar from '../../../view/paymentMethods/view/PaymentMethodsViewToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function PaymentMethodsPage() {
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
            i18n('entities.paymentMethods.menu'),
            '/payment-methods',
          ],
          [i18n('entities.paymentMethods.view.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.paymentMethods.view.title')}
        </h1>

        <PaymentMethodsViewToolbar match={match} />

        <PaymentMethodsView
          loading={loading}
          record={record}
        />
      </div>
    </>
  );
}

export default PaymentMethodsPage;
