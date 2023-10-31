import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../Environment/Environment';
import { Hero } from '../models/Hero';

// Decorator .. almost not saying anything
@Injectable({
  providedIn: 'root'
})
// class
export class HeroService {

  //baseURL : string = "https://localhost:7024/api/SuperHero";
  private readonly apiUrl=environment.apiUrl+"SuperHero/";
  constructor(private http:HttpClient) {}

  // data "from API"
  herolist:Hero[]=[
    {id:2,  name:"Bo", Place:"road", RealName:"Killer", DebutYear:new Date()},
    {id:12, name:"Ulla", Place:"road near sun", RealName:"Killer", DebutYear:new Date()},
    {id:22, name:"Pia", Place:"road near flower", RealName:"some value" , DebutYear:new Date()},
  ];

  // CRUD here
  getAllHardcoded():Hero[]{
    return this.herolist;
  }
  // Observable is something that listen "on the cobber" for data - async
  getAll():Observable<Hero[]>{
    return this.http.get<Hero[]>(this.apiUrl);
  }
  getById(id:number):Observable<Hero>{
    //cheat a bit https://localhost:7024/api/SuperHero/4
    return this.http.get<Hero>(this.apiUrl+id);
  }
  delete(id:number):void{
    //return this.herolist[0];
    //this.http.delete
  }
  // get2(){
  //   let temp = this.http.get<string>(this.apiUrl+"url here");
  // }
}

// connection to a server... it happens like this
// 010011100 => XMLHttpRequest => Ajax => Then a lot of other libraries
