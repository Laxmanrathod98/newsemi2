import { Author } from "./../book-store-models/Author.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cart } from "../book-store-models/Cart.model";
import { BookFormat } from "../book-store-models/Book-Format.model";
import { Book } from "../book-store-models/Book.model";
import { Category } from "src/app/common-utilities/book-store-models/Category.model";
import { User } from "../book-store-models/User.model";
import { LoginResponse } from "../book-store-models/LoginResponse.model";
@Injectable({
    providedIn: "root",
})
export class BookStoreCommonService {
    constructor(private httpClient: HttpClient) {}

    /**
     * Gets cart items
     * @returns cart items
     */
    getCartItems(id: number): Observable<Cart[]> {
        return this.httpClient.get<Cart[]>(`/api/cart/items/${id}`);
    }

    /**
     * Deletes cart item
     * @param id
     * @returns
     */
    deleteCartItem(userId: number, cartId: number) {
        return this.httpClient.delete(`/api/cart/${userId}/cart/${cartId}`);
    }

    /**
     * Gets book by id
     * @param id
     * @returns book by id
     */
    getBookById(id: number): Observable<Book> {
        return this.httpClient.get<Book>("/api/book/" + id);
    }

    /**
     * Gets list of books based on author id
     * @returns books lists for particular author
     */
    getAllBooksByAuthorId(id: Number): Observable<Book[]> {
        return this.httpClient.get<Book[]>("http://localhost:5000/api/book/author/" + id);
    }

    /**
     * Gets category data
     * @returns category data
     */
    getCategoryData(): Observable<Category> {
        return this.httpClient.get<any>(`/api/category`);
    }

    /**
     * Gets Authors data
     * @returns Authors data from backend
     */
    getAuthorsData(): Observable<Author[]> {
        return this.httpClient.get<any>(`/api/author`);
    }

    /**
     * Posts login user data
     * @returns login response from backend
     */
    login(user: User): Observable<LoginResponse> {
        return this.httpClient.post<LoginResponse>(`http://localhost:5000/api/user/login`, user);
    }

    /**
     * Adds cart item
     * @param userId
     * @param bookId
     * @param quantity
     * @returns  returns null
     */
    addCartItem(userId: number, bookId: number, quantity: number) {
        return this.httpClient.post(`api/cart/addCartItem/${userId}`, { quantity: quantity, bookId: bookId });
    }
}
