(function () {
    if (Discourse.dialect_deprecated) { return; }

    var siteSettings = Discourse.SiteSettings;
    if (siteSettings.discourse_replayer_plugin_enabled)
    {
     	Discourse.Markdown.whiteListTag('replayer','data-main','*');
    }

})();

