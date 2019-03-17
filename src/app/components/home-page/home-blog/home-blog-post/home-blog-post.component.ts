import { Component, OnInit, Input } from '@angular/core';
import BlogModel = namespace.BlogModel;
import Item = namespace.Item;
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-blog-post',
  templateUrl: './home-blog-post.component.html',
  styleUrls: ['./home-blog-post.component.scss']
})
export class HomeBlogPostComponent implements OnInit {
  @Input() post: Item;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onPostClick() {
    this.router.navigate(['blog', this.post.id]);
  }

}
