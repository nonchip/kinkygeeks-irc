$.getScript('https://nonchip.de/static/js/js.cookie.js', function(){
  window.plugin_username=Cookies.get('plugin_username');
  if(window.plugin_username == null){
    window.plugin_username=window.prompt('What\'s your nickname?');
    Cookies.set('plugin_username',window.plugin_username, {expires: 180, path: ''});
  }
  $.get('https://nonchip.de/callplugin_notify?nick='+escape(window.plugin_username));
});
