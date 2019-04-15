import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {ProductModel} from '../../components/shop/models/products.model';
import BlogModel = namespace.BlogModel;

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  private blogPosts: BehaviorSubject<BlogModel> = new BehaviorSubject<BlogModel>({
    kind: '',
    items: [],
    etag: ''
  });

  productsObs: Observable<any>;

  constructor(private http: HttpClient) { }

  getPosts() {
    const params = new HttpParams({
      fromObject: {
        fetchImages: 'true',
      }
    });
    return this.http.get('https://www.googleapis.com/blogger/v3/blogs/5305657234705927780/posts?key=AIzaSyCMQ0t_rcoBZaqtDZqKZXrdUfAhJpTSf5U', {params: params});
  }

  getPostsObs() {
    const params = new HttpParams({
      fromObject: {
        fetchImages: 'true',
      }
    });
    this.productsObs = this.http.get('https://www.googleapis.com/blogger/v3/blogs/5305657234705927780/posts?key=AIzaSyCMQ0t_rcoBZaqtDZqKZXrdUfAhJpTSf5U', {params: params});
  }

  getLatestPosts() {
    const params = new HttpParams({
      fromObject: {
        fetchImages: 'true',
        maxResults: '3'
      }
    });
    return this.http.get('https://www.googleapis.com/blogger/v3/blogs/5305657234705927780/posts?key=AIzaSyCMQ0t_rcoBZaqtDZqKZXrdUfAhJpTSf5U', {params: params});
  }
  getPost(postID: string) {
    return this.http.get(`https://www.googleapis.com/blogger/v3/blogs/5305657234705927780/posts/${postID}?key=AIzaSyCMQ0t_rcoBZaqtDZqKZXrdUfAhJpTSf5U`);
  }
}
