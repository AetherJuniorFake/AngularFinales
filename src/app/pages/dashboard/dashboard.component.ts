import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/login/login.component';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private static _sabor: string = '';
  static get sabor(): string {
    return DashboardComponent._sabor;
  }
  static set sabor(value: string) {
    DashboardComponent._sabor = value;
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(AppComponent.logged === false){
      this.redirect();
    }
  }

  redirect() {
    this.router.navigate(['login']);
}

// tslint:disable-next-line: member-ordering
barChartOptions: ChartOptions = {
  responsive: true,
};
// tslint:disable-next-line: member-ordering
barChartLabels: Label[] = ['Manzana', 'Banana', 'Kiwwi', 'Mora Azul', 'Naranja', 'Uva'];
// tslint:disable-next-line: member-ordering
barChartType: ChartType = 'bar';
// tslint:disable-next-line: member-ordering
barChartLegend = true;
// tslint:disable-next-line: member-ordering
barChartPlugins = [];

// tslint:disable-next-line: member-ordering
barChartData: ChartDataSets[] = [
  { data: [1, 2, 3, 1, 2, 1,0], label: 'Sabores de Cerebros Totales' }
];


// tslint:disable-next-line: member-ordering
barChartOptionsUsuarios: ChartOptions = {
  responsive: true,
};
// tslint:disable-next-line: member-ordering
barChartLabelsUsuarios: Label[] = ['Manzana', 'Kiwwi', 'Naranja', 'Uva'];
// tslint:disable-next-line: member-ordering
barChartTypeUsuarios: ChartType = 'bar';
// tslint:disable-next-line: member-ordering
barChartLegendUsuarios = true;
// tslint:disable-next-line: member-ordering
barChartPluginsUsuarios = [];

// tslint:disable-next-line: member-ordering
barChartDataUsuarios: ChartDataSets[] = [
  { data: [1, 2, 2, 1,0], label: 'Sabores de Cerebros Por Usuario' }
];
}

/*// tslint:disable-next-line: member-ordering
barChartOptionsUsuarios: ChartOptions = {
  responsive: true,
};
// tslint:disable-next-line: member-ordering
barChartLabelsUsuarios: Label[] = ['Banana', 'Kiwwi', 'Mora Azul'];
// tslint:disable-next-line: member-ordering
barChartTypeUsuarios: ChartType = 'bar';
// tslint:disable-next-line: member-ordering
barChartLegendUsuarios = true;
// tslint:disable-next-line: member-ordering
barChartPluginsUsuarios = [];

// tslint:disable-next-line: member-ordering
barChartDataUsuarios: ChartDataSets[] = [
  { data: [2, 1, 1,0], label: 'Sabores de Cerebros Por Usuario' }
];
}*/


