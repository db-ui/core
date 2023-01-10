/* global PluginUIExtension document */
var PluginUIExtension = {

  /**
   * The function defined as the onready callback within the plugin configuration.
   */
  init: function () {
    var nav = document.querySelector('.pl-c-nav__list');
    nav.prepend(/*NAVLINKS-BEFORE-SNIPPET*/);
    nav.append(/*NAVLINKS-AFTER-SNIPPET*/);

    var rightList = document.querySelector('.pl-c-tools__list');
    rightList.prepend(/*TOOLLINKS-BEFORE-SNIPPET*/);
    rightList.append(/*TOOLLINKS-AFTER-SNIPPET*/);
  }
};
