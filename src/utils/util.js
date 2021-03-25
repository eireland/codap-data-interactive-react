export function getCategories(plugins) {
  let categoryArray = [];
  plugins.map(plugin => {
    plugin.categories.forEach(category => {
      if (!categoryArray.includes(category)) {
        categoryArray.push(category)
      }
    })
  })
  return categoryArray;
}