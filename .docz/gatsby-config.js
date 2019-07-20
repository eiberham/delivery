const { merge } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  siteMetadata: {
    title: 'Despegar Test',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        port: 3001,
        p: 3000,
        root: '/home/abraham/despegar-test/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        ignore: [{}, {}, {}, {}, {}],
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Despegar Test',
        description: 'My awesome app using docz',
        host: 'localhost',
        separator: '-',
        themeConfig: {},
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        paths: {
          root: '/home/abraham/despegar-test',
          templates:
            '/home/abraham/despegar-test/node_modules/docz-core/dist/templates',
          packageJson: '/home/abraham/despegar-test/package.json',
          docz: '/home/abraham/despegar-test/.docz',
          cache: '/home/abraham/despegar-test/.docz/.cache',
          app: '/home/abraham/despegar-test/.docz/app',
          appPublic: '/home/abraham/despegar-test/.docz/public',
          appNodeModules: '/home/abraham/despegar-test/node_modules',
          appPackageJson: '/home/abraham/despegar-test/package.json',
          appYarnLock:
            '/home/abraham/despegar-test/node_modules/docz-core/yarn.lock',
          ownNodeModules:
            '/home/abraham/despegar-test/node_modules/docz-core/node_modules',
          gatsbyConfig: '/home/abraham/despegar-test/gatsby-config.js',
          gatsbyBrowser: '/home/abraham/despegar-test/gatsby-browser.js',
          gatsbyNode: '/home/abraham/despegar-test/gatsby-node.js',
          gatsbySSR: '/home/abraham/despegar-test/gatsby-ssr.js',
          importsJs: '/home/abraham/despegar-test/.docz/app/imports.js',
          rootJs: '/home/abraham/despegar-test/.docz/app/root.jsx',
          indexJs: '/home/abraham/despegar-test/.docz/app/index.jsx',
          indexHtml: '/home/abraham/despegar-test/.docz/app/index.html',
          db: '/home/abraham/despegar-test/.docz/app/db.json',
        },
      },
    },
  ],
}

module.exports = merge(config, custom)
