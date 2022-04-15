import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propteryId: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.propteryId = +this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (p) => { this.propteryId = +p["id"] }
    )
  }

  onSelectNext() {
    this.propteryId += 1;
    this.router.navigate(['property-detail', this.propteryId]);

  }

}
