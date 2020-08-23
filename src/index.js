import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import {renderEntrieTree} from './render';

renderEntrieTree(state);

serviceWorker.unregister();
