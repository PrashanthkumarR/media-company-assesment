import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  imageArray = [
    {
      url: 'assets/images/post1.png',
      name: "Stacy Joe",
      title: "CEO & Founder",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis facilisis orci, a ullamcorper erat. Maecenas bibendum sit amet erat non finibus. Quisque in venenatis tortor.',
      email: 'stacy@gmail.com'
    },
    {
      url: 'assets/images/post7.png',
      name: "Dain Doiez",
      title: "CTO & Co-Founder",
      desc: 'Praesent ornare venenatis arcu, vitae vehicula lectus vulputate eget. Curabitur lacinia tempus placerat. Nam imperdiet purus arcu, eget suscipit turpis sagittis pulvinar.',
      email: 'dain@gamil.com'
    },
    {
      url: 'assets/images/post10.png',
      name: "Milinda Zazer",
      title: "Marketing Manager",
      desc: 'Praesent hendrerit risus in lacus vestibulum maximus. Nam non dui ante. Cras non iaculis nibh. Quisque purus justo, varius at accumsan eget, aliquet a velit.',
      email: 'milinda@gmail.com'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
