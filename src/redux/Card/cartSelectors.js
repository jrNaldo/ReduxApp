export const selectProductsCount = (rootReducer) => {
    return rootReducer.CardReducer.products.reduce((acc,el) => acc + el.quantity, 0)
}

export const selectProductsTotalPrice = (rootReducer => {
    return rootReducer.CardReducer.products.reduce((acc,el) => acc + el.price * el.quantity, 0)
})