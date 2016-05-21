exports.paths = {
  src: 'src/',
  dest: 'dist/docs/',
  moduleScripts: ['dist/docs/modules/brmaterial/core/core.js', 'dist/docs/modules/brmaterial/**/*.js'],
  moduleCss: ['dist/docs/modules/brmaterial/**/*.css'],
  appScripts: ['dist/docs/js/app.js', 'dist/docs/js/**/*.js', 'dist/docs/demo-partials/**/*.js'],
  appCss: ['dist/docs/js/**/*.css'],
  scripts: ['src/**/*.js', '!src/**/*.spec.js', '!src/components/*/demo*/', '!src/components/*/demo*/**'],
  css: ['src/core/*.css', 'src/components/**/*.css', '!src/components/*/demo*/', '!src/components/*/demo*/**'],
  demoFiles: ['src/components/*/demo*/**'],
  font: ['src/core/brMaterialIcons.woff']
};