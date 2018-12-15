const handlebars = require('Handlebars');
const path = require('path');
const fs = require('fs');
const reactDocgenTs = require('react-docgen-typescript');
const readdir = require('readdirp');

const moduleTemplate = fs.readFileSync(path.join(__dirname, './templates/ng-module.hbs'), 'utf8');
const compiledModuleTemplate = handlebars.compile(moduleTemplate);

const dirSettings = {
  root: './src/app',
  // Filter files with js and json extension
  fileFilter: [ '*.tsx' ],
  // Filter by directory
  directoryFilter: [ '!angular-react-components' ],
}

readdir(
  dirSettings,
  (file) => {
    const componentMeta = reactDocgenTs.parse(file.fullPath)[0];
    componentMeta.importPath = file.parentDir;
    const renderedModule = compiledModuleTemplate(componentMeta);
    fs.writeFileSync(
      path.join(__dirname, `./angular-components/${componentMeta.displayName.toLowerCase()}.module.ts`),
      renderedModule
    )
    // console.log(rendered);
    console.log(componentMeta);
  },
  () => {}
);

