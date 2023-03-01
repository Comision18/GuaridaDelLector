const fs = require('fs');
const path = require('path');

/* const productsFilePath = path.join(__dirname, '../data/books.json');

const libros = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */


module.exports = {
    cart : (req, res) => {
         const productsFilePath = path.join(__dirname, '../data/books.json');
        const libros = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let id = +req.params.id

        let libro = libros.find(libro => libro.id === id)

        return res.render('cart',{
            libro
        })
       
 }}