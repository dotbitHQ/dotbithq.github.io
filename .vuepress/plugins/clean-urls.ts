// forked from `vuepress-plugin-clean-urls`
const CleanUrlsPlugin = ({ normalSuffix = '', indexSuffix = '/', notFoundPath = '/404.html', }) => ({
  name: 'vuepress-plugin-clean-urls',
  extendsPage(page) {
    const { pathInferred, frontmatter = {}, htmlFilePathRelative } = page;

    if (frontmatter.permalink) {
      return
    }

    if (htmlFilePathRelative === '404.html') {
      page.path = notFoundPath;
    }
    else if (pathInferred.endsWith('.html')) {
      // normal path
      // e.g. foo/bar.md -> foo/bar.html
      page.path = pathInferred.slice(0, -5) + normalSuffix;
    }
    else if (pathInferred.endsWith('/')) {
      // index path
      // e.g. foo/index.md -> foo/
      page.path = pathInferred.slice(0, -1) + indexSuffix;
    }
  },
});
export default CleanUrlsPlugin