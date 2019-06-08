/**
 *
 * Asynchronously loads the component for Toolbar
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
