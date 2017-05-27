const exec = require('execa');

const createApp = require('frint').createApp;

module.exports = createApp({
  name: 'init',

  help: 'Help text here...',

  providers: [
    {
      name: 'execute',
      useFactory: function useFactory(deps) {
        return function execute() {
          const example = deps.params.example || 'counter';
          const dir = deps.pwd;

          const cmds = [
            `mkdir -p ${dir}`,
            `curl https://codeload.github.com/Travix-International/frint/tar.gz/master | tar -xz -C ${dir} --strip=3 frint-master/examples/ ${example}`,
          ];

          deps.console.log('Initializing...');
          const cmdPromises = cmds.map(cmd => exec.shell(cmd));

          Promise.all(cmdPromises)
            .then(() => deps.console.log('Done!'))
            .catch(e => deps.console.error(e));
        };
      },
      deps: [
        'console',
        'params',
        'pwd',
      ],
    }
  ],
});
