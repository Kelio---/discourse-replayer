import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features['discourse-replayer'] = true;
});

export function setup(helper) {
  helper.whiteList(['replayer[data-main=*]']);
}