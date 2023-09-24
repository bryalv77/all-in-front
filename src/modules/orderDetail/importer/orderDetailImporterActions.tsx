import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/orderDetail/importer/orderDetailImporterSelectors';
import OrderDetailService from 'src/modules/orderDetail/orderDetailService';
import fields from 'src/modules/orderDetail/importer/orderDetailImporterFields';
import { i18n } from 'src/i18n';

const orderDetailImporterActions = importerActions(
  'ORDERDETAIL_IMPORTER',
  selectors,
  OrderDetailService.import,
  fields,
  i18n('entities.orderDetail.importer.fileName'),
);

export default orderDetailImporterActions;