import { Component, OnInit } from '@angular/core';
import { GallaryService } from 'src/app/shared/gallary.service';



@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit {
  imagePostArray:Ipost[] =[];

  constructor(private gallaryService:GallaryService) {

   }

  ngOnInit(): void {
    this.getImagePost();
  }

  getImagePost(){
    this.imagePostArray = this.gallaryService.getPostInfo();
  }

}

export interface Ipost{
  name:string;
  imgUrl:string;
  seen:number;
  like:number;
}