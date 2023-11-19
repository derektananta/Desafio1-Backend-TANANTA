class ProductManager {
    constructor() {
        this.products = [];
        this.id = 0
    }

    getProducts() {
        return this.products
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const existingCODE = this.products.some(product => product.code === code);

        if (existingCODE) {
            console.log(`NO SE PUEDE AGREGAR (${title}), ya existe un producto con este CODE (${code}).`);
            return;
        }

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log('Todos los campos son obligatorios para agregar un producto. Verifique los campos de su producto');
            return;
        }

        const newProduct = {
            id: this.id++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(newProduct);
    }

    getProductById(idToSearch) {
        const productFound = this.products.find(product => product.id === idToSearch)

        productFound
            ? console.log(`Producto encontrado: ${productFound.title} - ID: ${productFound.id}`)
            : console.log("Ningún producto encontrado con el ID proporcionado.");

    }
}

const productManager = new ProductManager();
console.log(productManager.getProducts());

const product1 = productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

const product2 = productManager.addProduct("producto prueba 2", "Este es un producto prueba 2", 200, "Sin imagen 2", "abc123", 25);

const product3 = productManager.addProduct("producto prueba 3", "Este es un producto prueba 3", 200, "Sin imagen 3", "abc1234", 25);
console.log(productManager.getProducts());

const idToSearch = 1;
productManager.getProductById(idToSearch)