import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // products = [
  //   {
  //     id: 1,
  //     img: '../../assets/fruit1.webp',
  //     name: 'Oranges',
  //     description: 'a round usually sweet juicy fruit with a yellowish to reddish orange rind. : any of various small evergreen citrus trees having shiny leaves, fragrant white flowers, and fruits which are oranges. : a color between red and yellow. orange.', 
  //     price: 3
  //   },
  //   {
  //     id: 2,
  //     img: '../../assets/fruit2.webp',
  //     name: 'Lemon',
  //     description: 'The lemon is a round, slightly elongated fruit, it has a strong and resistant skin, with an intense bright yellow colour when it is totaly ripe, giving off a special aroma when it is cut. The pulp is pale yellow, juicy and acid, divided in gores.', 
  //     price: 3.5
  //   },
  //   {
  //     id: 3,
  //     img: '../../assets/fruit3.webp',
  //     name: 'Carrot',
  //     description: 'carrot, (Daucus carota), herbaceous, generally biennial plant of the Apiaceae family that produces an edible taproot. Among common varieties root shapes range from globular to long, with lower ends blunt to pointed. Besides the orange-coloured roots, white-, yellow-, and purple-fleshed varieties are known.', 
  //     price: 3
  //   },
  //   {
  //     id: 4,
  //     img: '../../assets/fruit4.webp',
  //     name: 'Apple',
  //     description: 'the fleshy usually rounded and red, yellow, or green edible pome fruit of a tree (genus Malus) of the rose family.', 
  //     price: 3
  //   },
  //   {
  //     id: 5,
  //     img: '../../assets/fruit5.webp',
  //     name: 'Banana',
  //     description: 'A banana is a curved, yellow fruit with a thick skin and soft sweet flesh. If you eat a banana every day for breakfast, your roommate might nickname you the monkey. A banana is a tropical fruit that is quite popular all over the world. It grows in bunches on a banana tree.', 
  //     price: 3
  //   },
  // ]
  
  baseUrl: string = 'http://localhost:80/php/';
  constructor(private http: HttpClient) { }

  // public getProducts(): Array< {id: Number, img:string , name:string , description: string, price: Number}>
  // {
  //   return this.products;
  // }


  getProducts()
  {
    return this.http.get<Products[]>(this.baseUrl + 'view.php');
  }
}
