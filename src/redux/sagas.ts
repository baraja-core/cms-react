import { localizationSaga } from "./localization";
import { fetchProjectInfo, projectInfoSaga } from "./projectInfo";

const sagas = [localizationSaga, projectInfoSaga, fetchProjectInfo];

export default sagas;
