module.exports = shipit => {
  shipit.initConfig({
    production: {
      servers: 'stfoo.ru',
      strict: false,
      buildCommand: 'yarn build',
      deployTo: '/var/www/apps/table',
    },
  })

  shipit.task('deploy', ['build'], () => {
    return shipit.remoteCopy('.build/*', shipit.config.deployTo)
  })

  shipit.blTask('build', () => {
    return shipit.local(shipit.config.buildCommand)
  })
}
