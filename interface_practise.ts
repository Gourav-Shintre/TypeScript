interface book {
    title:string;
    author: string;
    pages: string;
}

interface libraryItem<T> {
    getBookDetails():T;
}

class BookItem implements libraryItem<book>{
    private title: string;
    private author: string ;
    private pages:string;
    constructor(title:string,author:string,pages:string){
        this.title=title;
        this.author=author;
        this.pages=pages;
    }
    getBookDetails(): book {
      return  {
        title:this.title,
        author:this.author,
        pages:this.pages};
    }
}