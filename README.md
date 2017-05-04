# [WP-Boilerplate](https://github.com/jdhillen/wp-boilerplate)

A complete boilerplate for custom Wordpress theme development.

*   Source : [https://github.com/jdhillen/wp-boilerplate](https://github.com/jdhillen/wp-boilerplate)
*   Author : [J.D. Hillen](http://jdhillen.com) // [@jdhillen](http://twitter.com/jdhillen)

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Prerequisites

What things you need to install the software and how to install them

*   [Node](https://nodejs.org/en)
*   [NPM](https://www.npmjs.com)


### Installing

A step by step series of examples that tell you have to get a development env running

**Step 1** - Navigate to Wordpress' themes folder:

```shell
cd ../wp-content/themes
```

**Step 2** - Clone the repo. From your CLI, run:

```shell
git clone https://github.com/jdhillen/wp-boilerplate.git
```

**Step 3** - Navigate to cloned folder:

```shell
cd wp-boilerplate
```

**Step 4** - Install NPM Dependencies:

```shell
npm install
```

**Step 5** - Build for `dev` with `browser-sync`:

```shell
gulp watch
```

**Step 6** - Build for `prod` with minified `js` and `css` files:

```shell
gulp build
```

## Built With

*   [NPM](https://www.npmjs.com/) - Package Manager
*   [Gulp](http://gulpjs.com/) - Task Runner
*   [BrowserSync](https://www.browsersync.io/) - Syncronized Browser Testing


## Acknowledgments

*   Shout out to [Todd Motto](http://toddmotto.com) and his [html5blank](https://github.com/toddmotto/html5blank) which was used as the base for this project


## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/jdhillen/wp-boilerplate/tags).


## License

This project is available under the [MIT LICENSE](LICENSE.md).
