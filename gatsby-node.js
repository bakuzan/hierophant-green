const path = require(`path`);
const {
  createFilePath,
  createRemoteFileNode
} = require(`gatsby-source-filesystem`);

const CURRENTLY_AIRING = 'Currently Airing';

exports.onCreateNode = async ({ node, getNode, actions, store, cache }) => {
  if (node.internal.type !== 'DataJson') {
    return;
  }

  const { createNodeField, createNode } = actions;

  node.series = await Promise.all(
    node.series.map(async (item) => {
      const image = await createRemoteFileNode({
        url: item.image,
        store,
        cache,
        createNode,
        createNodeId: (id) => `file-${id}`
      });

      if (image) {
        item.image___NODE = image.id;
      }

      return item;
    })
  );

  const value = createFilePath({ node, getNode, basePath: `data` });

  createNodeField({
    name: `slug`,
    node,
    value
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const currentYear = `${new Date().getFullYear()}_`;
  const { createPage } = actions;

  const result = await graphql(`
    {
      allDataJson(sort: { fields: [season], order: DESC }) {
        edges {
          node {
            season
            date
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const seasonTemplate = path.resolve(`src/templates/season.js`);
  const yearTemplate = path.resolve(`src/templates/year.js`);

  const jsonNodes = result.data.allDataJson.edges.map((x) => x.node);
  const seasons = jsonNodes.filter((x) => x.season !== CURRENTLY_AIRING);

  const years = seasons
    .map((x) => x.season.split('-')[0].concat('_'))
    .filter(
      (x, i, a) =>
        a.indexOf(x) === i &&
        a.filter((y) => y === x).length === 4 &&
        x !== currentYear
    )
    .map((season) => ({
      season,
      year: season.slice(0, -1),
      isYear: true,
      fields: { slug: `/${season.slice(0, -1)}/` }
    }));

  const pages = [...seasons, ...years].sort((a, b) =>
    a.season < b.season ? 1 : a.season > b.season ? -1 : 0
  );

  const maxIndex = pages.length - 1;
  pages.forEach((node, index) => {
    const previous = index === maxIndex ? null : pages[index + 1];
    const next = index === 0 ? null : pages[index - 1];

    createPage({
      path: node.fields.slug,
      component: node.isYear ? yearTemplate : seasonTemplate,
      context: {
        slug: node.fields.slug,
        isYear: node.isYear || false,
        previous,
        next
      }
    });
  });

  // Airing
  const airingTemplate = path.resolve(`src/templates/airing.js`);
  const airing = jsonNodes
    .filter((x) => x.season === CURRENTLY_AIRING)
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  const maxAiringIndex = airing.length;
  airing.forEach((node, index) => {
    const previous = index === maxAiringIndex ? null : airing[index + 1];
    const next = index === 0 ? null : airing[index - 1];

    createPage({
      path: node.fields.slug,
      component: airingTemplate,
      context: {
        slug: node.fields.slug,
        isYear: false,
        previous,
        next
      }
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '*': path.resolve(__dirname, 'src'),
        '@': path.resolve(__dirname, 'src')
      }
    }
  });
};
