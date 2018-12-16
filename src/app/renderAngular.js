const handlebars = require('Handlebars');
const path = require('path');
const fs = require('fs');
const reactDocgenTs = require('react-docgen-typescript');
const readDir = require('readdirp');
const mkDir = require('mkdirp');

const componentTemplate = fs.readFileSync(path.join(__dirname, './templates/ng-component.hbs'), 'utf8');
const compiledComponentTemplate = handlebars.compile(componentTemplate);
const moduleTemplate = fs.readFileSync(path.join(__dirname, './templates/ng-module.hbs'), 'utf8');
const compiledModuleTemplate = handlebars.compile(moduleTemplate);
const indexTemplate = fs.readFileSync(path.join(__dirname, './templates/ng-index.hbs'), 'utf8');
const compiledIndexTemplate = handlebars.compile(indexTemplate);


const readDirSettings = {
  root: './src/app',
  // Filter files with js and json extension
  fileFilter: [ '*.tsx' ],
  // Filter by directory
  directoryFilter: [ '!angular-react-components' ],
}

readDir(
  readDirSettings,
  (fileMeta) => {
    const componentMeta = reactDocgenTs.parse(fileMeta.fullPath)[0];
    const context = buildComponentContext(fileMeta, componentMeta);
    renderComponent(context);
    renderModule(context);
    renderIndex(context);
  },
  () => {}
);

function renderComponent(context) {
  const componentPath = path.join(
    __dirname,
    `./angular-components/${context.name}/${context.name}.component.ts`
  );
  const renderedComponent = compiledComponentTemplate(context);
  writeFile(componentPath, renderedComponent);
}

function renderModule(context) {
  const renderedModule = compiledModuleTemplate(context);
  const modulePath = path.join(
    __dirname,
    `./angular-components/${context.name}/${context.name}.module.ts`
  );
  writeFile(modulePath, renderedModule);
}

function renderIndex(context) {
  const renderedIndex = compiledIndexTemplate(context);
  const indexPath = path.join(
    __dirname,
    `./angular-components/${context.name}/index.ts`
  );
  writeFile(indexPath, renderedIndex); 
}

function writeFile(filePath, contents) {
  mkDir(path.dirname(filePath), function (err) {
    if (err) return;

    fs.writeFileSync(filePath, contents);
  });
}

function buildComponentContext(fileMeta, componentMeta) {
  const context = {};
  context.name = componentMeta.displayName.toLowerCase();
  context.displayName = componentMeta.displayName;
  context.importPath = fileMeta.parentDir;
  context.inputProps = [];
  context.outputProps = [];
  const propsObj = componentMeta.props;
  for (const key of Object.keys(propsObj)) {
    const prop = propsObj[key];
    const propToPush = {
      name: prop.name,
      defaultValue: prop.defaultValue,
      description: prop.description,
      required: prop.required
    };
    if (prop.type.name === '() => void' || prop.type.name === '() => Function') {
      context.outputProps.push(propToPush);
    } else {
      context.inputProps.push(propToPush);
    }
  }
  return context;
}
