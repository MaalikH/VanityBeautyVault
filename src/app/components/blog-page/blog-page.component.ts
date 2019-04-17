import { Component, OnInit } from '@angular/core';
import {BlogServiceService} from '../../services/blog-service/blog-service.service';
import BlogModel = namespace.BlogModel;

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss', '../../app.component.scss']
})
export class BlogPageComponent implements OnInit {

  posts: BlogModel;
  dataRetrieved = false;

  constructor(private blogService: BlogServiceService) {
    /**
    this.blogService.getPosts().subscribe((data: BlogModel) => {
      this.posts = data;
    });**/

    this.blogService.productsObs.subscribe((data: BlogModel) => {
      this.posts = data;
      this.dataRetrieved = true;
    });
  }

  ngOnInit() {

  }

}
