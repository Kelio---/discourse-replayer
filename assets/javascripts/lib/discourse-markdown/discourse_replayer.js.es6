import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features.discourse_replayer = !!siteSettings.discourse_replayer_plugin_enabled;
});

export function setup(helper) {
  helper.whiteList(['replayer[data-main=*]']);
}