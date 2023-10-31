import { Component } from '@angular/core';
import { Hero } from 'src/app/models/Hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'tuesday', // remember to call these otherwise u cant connect to this file
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],

})
export class HeroComponent {
// hero array - hardcode version 1
// herolist:Hero[]=[
//     {Id:2, Name:"Bo", Place:"road", RealName:"Killer", DebutYear:new Date()},
//     {Id:12, Name:"Ulla", Place:"road near sun", RealName:"Killer", DebutYear:new Date()},
//     {Id:22, Name:"Pia", Place:"road near flower", RealName:"some value" , DebutYear:new Date()},
// ];
herolist:Hero[]=[];

/** It have a DI in the parametre
 * this line tells us that we have a prop called service - its a Design Pattern
 */
constructor(private service:HeroService) {
}

// CRUD getALl, getById, delete, update, create
// version 1
// getAll():Hero[]{
//   console.log(this.herolist); // test purposes
//   return this.herolist;
// }
// version 2 - service - we dont have async
// getAll():Hero[]{
//   let data = this.service.getAllHardcoded();
//   console.log(data);
//   return data;
// }

getAll(){
  this.service.getAll().subscribe(
    (data)=>   // I use the () around data, to show U that its a function.. I dont have to use ()
    {
      //console.log(data);
      // this.Id = id %%%% big mistake
      // this.Name = name
      this.herolist = data;
      console.log(this.herolist);

    }
  )
}
// version 1
// getById(id:number):Hero{
//   let found = this.herolist.filter(obj=>obj.id==id); //PK and there is always only 1
//   console.log(found);
//   return found[0];
// }

getById(id:number):Hero{
  let heroTemp:Hero=new Hero(); // how do i assign this?
  this.service.getById(id).subscribe(
    (data)=>{
      console.log(data);
      // need a container for this data, a place where we can show it....
      heroTemp=data;
    }
  )
  return heroTemp;
}

delete(id:number):void{
  // here we want to find the number to delete in the array!!
  // when we remove the element the "screen" does not refresh - so we have to do that
  // - this can be an issue in several ways
  let index = this.herolist.findIndex(heroObj=>heroObj.id==id);
  let found = this.herolist.splice(index,1);
  // DEBUG normal I wont do this when its "done"
  console.log(found);
  this.herolist.forEach(hero =>
    console.log(hero)
  )
}
create(hero:Hero):void{
  console.log(hero);
}
//boolean
update(idToUpdate:number):void{
  // logic to get hero from id and then update the data...
  console.log(idToUpdate);
}





// call the other methods to see if they work...
// the hardcoded data we want that removed to another file

// Team - do the same "stuff"

// Forms (input from us) (we do this if we have time otherwise its tmr....)



}
