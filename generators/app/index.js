'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const fs = require('fs');
const path = require('path');
const version = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../../') + '/package.json')
).version;
module.exports = class extends Generator {
  prompting() {
    this.log(yosay('generator-slimphp ' + chalk.green(`v${version}`)));
    const prompts = [
      {
        type: 'list',
        name: 'apptype',
        message: 'Which type of landingpage you want to create?',
        choices: ['Static landingpage', 'Landingpage with form']
      }
    ];
    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    let apptype;
    if (this.props.apptype === 'Static landingpage') {
      apptype = 1;
    } else if (this.props.apptype === 'Landingpage with form') {
      apptype = 2;
    }
    this.fs.copy(this.templatePath('__tests__'), this.destinationPath('__tests__'));
    this.fs.copy(this.templatePath('bin'), this.destinationPath('bin'));
    this.fs.copy(this.templatePath('dist'), this.destinationPath('dist'));
    this.fs.copy(this.templatePath('src'), this.destinationPath('src'));
    this.fs.copy(this.templatePath('eslintrc.js'), this.destinationPath('.eslintrc.js'));
    this.fs.copy(this.templatePath('sshconfig'), this.destinationPath('.sshconfig'));
    this.fs.copy(this.templatePath(`package${apptype}.json`), this.destinationPath('package.json'));
    this.fs.copy(this.templatePath(`_/_js${apptype}.mustache`), this.destinationPath('src/views/partials/_js.mustache'));
    this.fs.copy(this.templatePath(`_/content${apptype}.mustache`), this.destinationPath('src/views/partials/content.mustache'));
    this.fs.copy(this.templatePath(`_/scripts${apptype}.js`), this.destinationPath('src/static/scripts.js'));
  }

  install() {
    this.installDependencies({
      bower: false,
      npm: false,
      yarn: true,
      callback: () => {
        console.log(chalk.green(`=> Everything is ready!`));
      }
    });
  }
};
