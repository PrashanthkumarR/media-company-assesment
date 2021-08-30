import { Injectable } from '@angular/core';
import { Ipost } from '../home/gallary/gallary.component';

@Injectable({
  providedIn: 'root'
})
export class GallaryService {

  postInfo: Array<any[]> = []

  constructor() { }

  getPostInfo() {
    const result:Array<Ipost> = [
      { name: "test1", imgUrl: "/assets/images/post1.png", seen: 1000, like: 100 },
      { name: "test2", imgUrl: "/assets/images/post2.png", seen: 1001, like: 101 },
      { name: "test3", imgUrl: "/assets/images/post3.png", seen: 10010, like: 1079 },
      { name: "test4", imgUrl: "/assets/images/post4.png", seen: 10006, like: 1008 },
      { name: "test5", imgUrl: "/assets/images/post5.png", seen: 10008, like: 1009 },
      { name: "test6", imgUrl: "/assets/images/post6.png", seen: 10009, like: 1004 },
      { name: "test7", imgUrl: "/assets/images/post7.png", seen: 10004, like: 1002 },
      { name: "test8", imgUrl: "/assets/images/post8.png", seen: 10002, like: 1003 },
      { name: "test9", imgUrl: "/assets/images/post9.png", seen: 10001, like: 1007 },
      { name: "test10", imgUrl: "/assets/images/post10.png", seen: 10000, like: 1008 },
      { name: "test11", imgUrl: "/assets/images/post11.png", seen: 100068, like: 10090 },
      { name: "test12", imgUrl: "/assets/images/post12.png", seen: 100078, like: 10081 },
    ]
    return result;
  }
}
