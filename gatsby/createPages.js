const path = require('path');

module.exports = async ({ graphql, actions }) => {
  const currentYear = `${new Date().getFullYear()}_`;
  const { createPage } = actions;

  const result = await graphql(`
    {
      allDataJson(sort: { fields: [season], order: DESC }) {
        edges {
          node {
            season
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

  const seasons = result.data.allDataJson.edges.map((x) => x.node);
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
};
