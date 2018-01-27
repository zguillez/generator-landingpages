# generator-landingpages

[![Greenkeeper badge](https://badges.greenkeeper.io/zguillez/generator-landingpages.svg)](https://greenkeeper.io/)

[![npm version](https://badge.fury.io/js/generator-landingpages.svg)](https://badge.fury.io/js/generator-landingpages)
[![Build Status](http://img.shields.io/travis/zguillez/generator-landingpages.svg)](https://travis-ci.org/zguillez/generator-landingpages)
[![Maintainability](https://img.shields.io/codeclimate/maintainability/zguillez/generator-landingpages.svg)](https://codeclimate.com/github/zguillez/generator-landingpages/maintainability)
[![Dependency Status](https://gemnasium.com/zguillez/generator-landingpages.svg)](https://gemnasium.com/zguillez/generator-landingpages)
[![Installs](https://img.shields.io/npm/dt/generator-landingpages.svg)](https://coveralls.io/r/zguillez/generator-landingpages)
![](https://reposs.herokuapp.com/?path=zguillez/generator-landingpages)
[![Join the chat at https://gitter.im/zguillez/generator-landingpages](https://badges.gitter.im/zguillez/generator-landingpages.svg)](https://gitter.im/zguillez/generator-landingpages?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> [Zguillez](https://zguillez.io) | Guillermo de la Iglesia

## Yeoman generator for HTML landing pages development with Mustache and SASS

# Getting Started
## Install Yeoman

```
npm install -g yo
```

## Yeoman Generators
To install generator-landingpages from npm, run:

```
npm install -g generator-landingpages
```

Finally, initiate the generator:

```
yo landingpages
```

## Requeriments

### [Nodejs](https://nodejs.org)

**Documentation:**
- [https://nodejs.org](https://nodejs.org)


### [Yarn](https://yarnpkg.com)

**Documentation:**
- [https://yarnpkg.com](https://yarnpkg.com)


# Configuration

**FIRST OF ALL** you need to edit the file *.sshconfig*. 

## configuration file

Edit the **.sshconfig** with the data of your SSH server access or FTP connection.
 
```
{
  "domain": "https://{mydomain.com}",
  "ssh": {
    "host": "{ip}",
    "username": "{username}",
    "password": "{password}",
    "path": "/var/www/vhosts/{mydomain.com}/httpdocs/",
    "folder": "{folder}"
  },
  "ftp": {
    "host": "ftp.{mydomain.com}",
    "port": 21,
    "username": "{username}",
    "password": "{password}",
    "local": "./",
    "remote": "/"
  }
}
```

## configure local environment

Run de npm command **prepare-local**. This will edit the file *inc/config.php* with the *.sshconfig* data.

```
yarn prepare-local
```
# Usage
Develop code on folder **/src**

```
/src
    /static
    /views
    data.js
```

## Local server
Run npm task *serve* for development server

```
yarn serve
```

# Contributing and issues
Contributors are welcome, please fork and send pull requests! If you have any ideas on how to make this project better then please submit an issue or send me an [email](mailto:mail@zguillez.io).

# License
©2018 [Zguillez.io](https://zguillez.io)

Original code licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License) Open Source projects used within this project retain their original licenses.

# Changelog
### v0.1.0 (January 26, 2018)
Initial landing skeleton

Features:

* mustache templates
* sass

[![Analytics](https://ga-beacon.appspot.com/UA-1125217-30/zguillez/generator-landingpages?pixel)](https://github.com/igrigorik/ga-beacon)
