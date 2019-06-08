/**
 *
 * Asynchronously loads the component for Editor
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
