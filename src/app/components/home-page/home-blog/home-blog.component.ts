import { Component, OnInit } from '@angular/core';
import {BlogServiceService} from '../../../services/blog-service/blog-service.service';
import BlogModel = namespace.BlogModel;

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.scss', '../../../app.component.scss']
})
export class HomeBlogComponent implements OnInit {
  latestPosts: BlogModel;

  constructor(private blogService: BlogServiceService) { }

  ngOnInit() {
    this.blogService.getLatestPosts().subscribe((data: BlogModel) => {
      this.latestPosts = data;
    });
  }

}
