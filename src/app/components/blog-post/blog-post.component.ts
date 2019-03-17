import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogServiceService} from '../../services/blog-service/blog-service.service';
import Item = namespace.Item;

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss', '../../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogPostComponent implements OnInit {
  post: Item;

  constructor( private route: ActivatedRoute, private blogService: BlogServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((data: any) => {
      const postID = data.params.id;
      this.blogService.getPost(postID).subscribe((post: any) => {
        this.post = post;
        console.log('POST', this.post);
      });
    });
  }

}
