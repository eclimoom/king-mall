/* egg_folder/app/service/book.js */
'use strict';
/**
 * @Service product
 */

const Service = require('egg').Service;

// 通过定义 Service 类的方式来编写代码，所有的 Service 文件都必须放在 app/service 目录下。
class ProductServices extends Service {

    async findProducts(query) {
        const { ctx } = this;
        query.order = [[ 'created_at', 'desc' ], [ 'id', 'desc' ]];
        const found_product = await ctx.model.Product.findAndCountAll(query);
        return found_product;
    }

    async destroyProduct(query) {
        const { ctx } = this;
        const delete_product = await ctx.model.Product.destroy(query);
        return delete_product;
    }
}

module.exports = ProductServices;
