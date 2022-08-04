const productos = []
let id = 1

const listOfProductos = () => {
  return productos
}

const getProducto = (id) => {
  return (productos.find(producto => producto.id === parseInt(id)) || { error: 'Producto no encontrado' })
}

const addProducto = (producto) => {
  const prod = {
    id: id,
    name: producto.name,
    price: producto.price,
    thumbnail: producto.thumbnail
  }
  productos.push(prod)
  id++
  return (prod || { error: 'No se pudo cargar el producto, revise los datos' })
}

const updateProducto = (id, newContent) => {
  const producto = getProducto(parseInt(id))
  if ((producto.id == id) && (producto.id != null)) {
    producto.name = newContent.name
    producto.price = newContent.price
    producto.thumbnail = newContent.thumbnail
    return producto
  } else {
    return 'No encontrado'
  }
}

const deleteProducto = (id) => {
  const producto = getProduct(parseInt(id))
  if ((producto.id == id) && (producto.id != null)) {
    productos.splice(productos.indexOf(producto), 1)
    return 'Eliminado'
  } else {
    return 'No encontrado'
  }
}

module.exports = { listOfProductos, getProducto, addProducto, updateProducto, deleteProducto } 