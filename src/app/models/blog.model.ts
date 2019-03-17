declare module namespace {

  export interface Blog {
    id: string;
  }

  export interface Image {
    url: string;
  }

  export interface Image2 {
    url: string;
  }

  export interface Author {
    id: string;
    displayName: string;
    url: string;
    image: Image2;
  }

  export interface Replies {
    totalItems: string;
    selfLink: string;
  }

  export interface Item {
    kind: string;
    id: string;
    blog: Blog;
    published: Date;
    updated: Date;
    etag: string;
    url: string;
    selfLink: string;
    title: string;
    content: string;
    images: Image[];
    author: Author;
    replies: Replies;
  }

  export interface BlogModel {
    kind: string;
    items: Item[];
    etag: string;
  }

}

