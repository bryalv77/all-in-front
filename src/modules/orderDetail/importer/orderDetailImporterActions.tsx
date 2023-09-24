import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/orderDetail/importer/orderDetailImporterSelectors';
import OrderDetailService from '../../../modules/orderDetail/orderDetailService';
import fields from '../../../modules/orderDetail/importer/orderDetailImporterFields';
import { i18n } from '../../../i18n';

const orderDetailImporterActions = importerActions(
  'ORDERDETAIL_IMPORTER',
  selectors,
  OrderDetailService.import,
  fields,
  i18n('entities.orderDetail.importer.fileName'),
);

export default orderDetailImporterActions;
