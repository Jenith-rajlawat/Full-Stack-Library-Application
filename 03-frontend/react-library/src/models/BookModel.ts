// to consume the Book api , so what a book looks like in a backend and interface
class BookModel {
    id: number;
    title: string;
    author?: string;
    description?: string;
    copies?: number;
    copiesAvailable?: number;
    category?: string;
    img?: string;

    constructor(id: number, title: string, author: string, description: string,
        copies: number, copiesAvailable: number, category: string, img: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.copies = copies;
        this.copiesAvailable = copiesAvailable;
        this.category = category;
        this.img = img;

    }

}

export default BookModel;