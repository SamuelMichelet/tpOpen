import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() date: Date;

  constructor() { }

  ngOnInit() {
  }

  getTitle(){
    return this.title;
  }
  getContent(){
    return this.content;
  }

  loveIts: number = 0;
  noLoveIts: number = 0;
  onLove(){
    this.loveIts++;
    console.log(this.loveIts);
  }

  onNoLove(){
    this.loveIts--;
    console.log(this.loveIts);
  }

  

}
