'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const fs = require('fs');
const path = require('path');
const version = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../') + '/package.json')).version;
module.exports = class extends Generator {
  prompting() {
    this.log(yosay('generator-slimphp ' + chalk.green(`v${version}`)));
    /*const prompts = [
      {
        type: 'list',
        name: 'apptype',
        message: 'Which type of app you want to create?',
        choices: ['API Rest with JSON responses', 'Web with database connection', 'Web + API Rest']
      }
    ];
    return this.prompt(prompts).then(props => {
      this.props = props;
    });*/
  }

  writing() {
    this.fs.copy(this.templatePath('bin'), this.destinationPath('bin'));
    this.fs.copy(this.templatePath('dist'), this.destinationPath('dist'));
    this.fs.copy(this.templatePath('src'), this.destinationPath('src'));
    this.fs.copy(this.templatePath('eslintrc.js'), this.destinationPath('.eslintrc.js'));
    this.fs.copy(this.templatePath(`package.json`), this.destinationPath('package.json'));
    this.fs.copy(this.templatePath('sshconfig'), this.destinationPath('.sshconfig'));
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
