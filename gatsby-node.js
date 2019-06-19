const path = require(`path`);
const {
  createFilePath,
  createRemoteFileNode
} = require(`gatsby-source-filesystem`);

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
        createNodeId: () => `seriesImage-${item.id}`
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

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allDataJson {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const postTemplate = path.resolve(`src/templates/season.js`);
    const pages = result.data.allDataJson.edges;

    pages.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: postTemplate,
        context: {
          slug: node.fields.slug
        }
      });
    });
  });
};
