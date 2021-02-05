module.exports = {
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        '/blog': { page: '/blog' },
        '/portfolio': { page: '/portfolio' },
        '/servicos': { page: '/servicos' },
        '/sobre': { page: '/sobre' },
      }
    },
  }