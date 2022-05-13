import { brjSelector, useBrjSelector } from "../../redux/state";

const useProjectInfo = () => {
  const projectInfo = useBrjSelector((state) => brjSelector(state).projectInfo);

  const getProjectInfo = () => projectInfo;

  return {
    getProjectInfo,
  };
};

export default useProjectInfo;
