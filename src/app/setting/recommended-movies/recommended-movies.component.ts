import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService ,SPINNER} from 'ngx-ui-loader';

@Component({
  selector: 'app-recommended-movies',
  templateUrl: './recommended-movies.component.html',
  styleUrls: ['./recommended-movies.component.scss']
})
export class RecommendedMoviesComponent implements OnInit {
  sidebarSpacing: any;
  fgsType: any;
  checked2: boolean = true;
  constructor(
    private ngxLoader: NgxUiLoaderService,
  ) { }

  ngOnInit(): void {
    this.sidebarSpacing = 'expanded';
    this.fgsType = SPINNER.squareLoader;
    this.ngxLoader.start();
  }
  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
}
