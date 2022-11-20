import { loadCasDefaultSaga } from './cas';
import { localizationSaga } from './localization';
import { loadPluginSaga } from './plugin';
import { loadSettingsSaga } from './settings';

const sagas = [loadCasDefaultSaga, localizationSaga, loadPluginSaga, loadSettingsSaga];

export default sagas;
