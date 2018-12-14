const handlebars = require('Handlebars');
const path = require('path');
const fs = require('fs');
const reactDocgen = require('react-docgen-typescript');
const readdirp = require('readdirp');

const template = fs.readFileSync(path.join(__dirname, './templates/ng-module.hbs'), 'utf8');
const compiledTemplate = handlebars.compile(template);

const context = {
  component: {
    name: 'Button'
  }
};

const rendered = compiledTemplate(context);

const dirSettings = {
  root: './src/app',
  // Filter files with js and json extension
  fileFilter: [ '*.tsx',  ],
  // Filter by directory
  directoryFilter: [ '!angular-react-components' ],
}

readdirp(dirSettings, (file) => console.log(file), () => {});

// fs.writeFileSync(path.join(__dirname, `./components/${context.component.name}.module.ts`), rendered)
// console.log(rendered);

// const reactComp = fs.readFileSync(path.join(__dirname, './react-components/button.tsx'), 'utf8');
// const result = reactDocgen.parse(path.join(__dirname, './react-components/button.tsx'));
// console.log(result);
// console.log(result[0].props.title);
// console.log(result[0].props.type);
// console.log(result[0].props.onClick);
/**
 * const template = fs.readFileSync(path.join(__dirname, ‘./pluginExtensions.template.hbs’), ‘utf8’);
 * const rendered = Mustache.render(template, theDataToTheTemplate);
 * reflect Metadata
 */
