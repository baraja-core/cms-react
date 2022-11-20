import { useDispatch } from 'react-redux';
import { brjSelector, useBrjSelector } from '../../redux/state';
import { loadPlugin, selectPlugin } from '../../redux/plugin';

export const usePlugin = () => {
  const dispatch = useDispatch();

  const plugin = useBrjSelector((state) => brjSelector(state).plugin);

  const getByName = (name: string) => {
    if (plugin.structureList[name] === undefined) dispatch(loadPlugin(name));
    return plugin.structureList[name];
  };

  const getSelectedPluginName = () => plugin.selectedPlugin;

  const setPlugin = (plugin: string | undefined) => dispatch(selectPlugin(plugin));

  return { getByName, getSelectedPluginName, setPlugin };
};
