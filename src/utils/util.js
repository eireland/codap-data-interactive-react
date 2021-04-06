export function getCategories(plugins) {
  let categoryArray = [];
  let queryParam = window.location.search.substr(1);

  plugins.map(plugin => {
    plugin.categories.forEach(category => {
      if (!categoryArray.includes(category)) {
        categoryArray.push(category)
      }
    })
  })
  if (!queryParam.includes("dev")) {
    categoryArray.splice(categoryArray.indexOf("Utilities"),1);
  }
  return categoryArray;
}
