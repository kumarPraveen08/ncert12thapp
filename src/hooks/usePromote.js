import useBrowse from './useBrowse';
import useMessage from './useMessage';
import {APP} from '../constants';

const usePromote = (action = 'moreApp') => {
  if (action === 'share') {
    useMessage(APP.share + APP.package);
  } else if (action === 'rate') {
    useBrowse(APP.rate + APP.package);
  } else if (action === 'moreApp') {
    useBrowse(APP.dev);
  }
};

export default usePromote;
