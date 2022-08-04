const productos = require("../productos/productos.js");
class Actions {
  static getAll(){
    return productos.listOfProducts();
  }
  static getOne(id){
    return productos.getProduct(id);
  }
  static add(product){
    return productos.addProduct(product);
  }
  static update(id, newContent){
    return productos.updateProduct(id, newContent);
  }
  static delete(id){
    return productos.deleteProduct(id);
  }
}

module.exports = Actions;