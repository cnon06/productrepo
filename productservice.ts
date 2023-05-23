import { IProductService } from "./iproductservice";
import { Product } from "./product";
import { SimpleDataSource } from "./simpledatasource";

export class ProductService implements IProductService
{

private dataSource: SimpleDataSource;
private producs : Array <Product>;

constructor ()
{
    this.dataSource = new SimpleDataSource();
    this.producs = new Array<Product>();
    this.dataSource.getProducts().forEach(p => this.producs.push(p));
}



    getByID(id: number): Product {
      return this.producs.filter(p => p.id === id)[0];
    }
    getProducts(): Product[] {
        return this.producs;
    }
    saveProduct(product: Product): void {
        if(product.id == 0 || product.id == null)
        {
            product.id = this.generateID();
            this.producs.push(product);

        }
        else
        {
            let index = this.producs.indexOf(product);
            this.producs.splice(index,1,product);
        }
    }
    deleteProduct(product: Product): void {
        let index = this.producs.indexOf(product);
        if(index>0) 
        {
            this.producs.splice(index,1);
        }
    }


    private generateID(): number 
    {

        let key = 1;
        while (this.getByID(key) != null)
        {
            key++;
        }

        return key;
    }
    
}