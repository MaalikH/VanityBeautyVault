import { Component, OnInit, Input } from '@angular/core';
import Item = namespace.Item;
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog-page-post',
  templateUrl: './blog-page-post.component.html',
  styleUrls: ['./blog-page-post.component.scss']
})
export class BlogPagePostComponent implements OnInit {
  @Input() post: Item;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onPostClick() {
    this.router.navigate(['blog', this.post.id]);
  }

}
