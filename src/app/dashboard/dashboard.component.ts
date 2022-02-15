import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoryService} from "../service/category.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, OnDestroy {

  categories$ = this.categoryService.getCategories();

  constructor(private categoryService: CategoryService) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {}

}
