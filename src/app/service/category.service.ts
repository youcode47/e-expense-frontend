import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import {CategoryResponse} from "../model/category.response";


@Injectable({providedIn: 'root'})
export class CategoryService {
  private host = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getCategories(): Observable<CategoryResponse[]> {
    return this.http.get<CategoryResponse[]>(`${this.host}/categories`);
  }

  public addCategoriesToLocalCache(categories: CategoryResponse[]): void {
    localStorage.setItem('categories', JSON.stringify(categories));
  }


  public getCategoriesFromLocalCache(): CategoryResponse[] | null {
    if (localStorage.getItem('categories')) {
      return JSON.parse(<string>localStorage.getItem('categories'));
    }
    return null;
  }

}
