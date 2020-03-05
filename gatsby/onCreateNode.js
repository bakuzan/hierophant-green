const {
  createFilePath,
  createRemoteFileNode
} = require(`gatsby-source-filesystem`);

module.exports = async ({ node, getNode, actions, store, cache }) => {
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
