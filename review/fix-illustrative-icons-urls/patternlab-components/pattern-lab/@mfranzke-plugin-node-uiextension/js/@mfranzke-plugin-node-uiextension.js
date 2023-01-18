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
    rightList.append(document.createRange().createContextualFragment('<li class="pl-c-tools__item"><pl-button target="_blank" href="https://www.dbsystel.de/dbsystel-en/legal-3715942">Imprint<pl-icon name="help" slot="after"></pl-icon></pl-button></li>'),
document.createRange().createContextualFragment('<li class="pl-c-tools__item"><pl-button target="_blank" href="https://db-ui.github.io/datenschutzerklaerung.html">Datenschutzerklärung<pl-icon name="help" slot="after"></pl-icon></pl-button></li>'));
  }
};
