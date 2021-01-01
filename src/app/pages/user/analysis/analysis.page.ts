import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.page.html',
  styleUrls: ['./analysis.page.scss'],
})
export class AnalysisPage implements OnInit {

  @ViewChild('barChart') barChart;
  bars: any;
  @ViewChild('doughnutChart') doughnutChart;
  doughnut: any;
  @ViewChild('lineChart') lineChart;
  line: any;
  colorArray: any;

  constructor(
    private router: Router,
    
  ) { }

  ionViewDidEnter() {
    this.createBarChart();    
    // this.createDoughnutChart();   
    this.createLineChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Tidak Ternyata', '1954', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
          label: 'Jumlah Kematian',
          data: [4, 1, 2, 2, 16, 23, 30, 48,50,57,58,89,94,77,121,137,129,135,7,0],
          backgroundColor: 'aqua', // array should have same number of elements as number of dataset
          borderColor: 'aqua',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  createDoughnutChart() {      
    this.doughnut = new Chart(this.doughnutChart.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["Tidak Ternyata", "1954", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
        datasets: [
          {
            label: "# of Votes",
            data: [4, 1, 2, 2, 16, 23, 30,48,50,57,58,89,94,77,121,137,129,135,7,0],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 99, 142, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            hoverBackgroundColor: ["#FF9FF3", "#FECA57", "#FF6B6B", "#48DBFB", "#36A2EB", "#1DD1A1","#0652DD","#1B1464","#5758BB","#EA2027","#FFC312","#C4E538","#12CBC4","#eb4d4b","#535c68","#130f40","#30336b","#4834d4","#be2edd","#22a6b3"]
          }
        ]
      }
    });

    }

  createLineChart() {
    this.line = new Chart(this.lineChart.nativeElement, {
      type: "line",
      data: {
        labels: ["Tidak Ternyata", "1954", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
        datasets: [
          {
            label: "Kematian",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [4, 1, 2, 2, 16, 23, 30,48,50,57,58,89,94,77,121,137,129,135,7,0],
            spanGaps: false
          }
        ]
      }
    });
  }
  
  ngOnInit() {
  }

  populasimelayu : string;
  keluasan : string;
  kadar_populasi : number;

  KadarPopulasi () {
    this.kadar_populasi = parseInt(this.populasimelayu) / parseInt(this.keluasan);
  }

  bilpopu : string;
  kelahiran : string;
  kematian : string;
  unjuran : number;

  UnjuranPopulasi (){
    this.unjuran = parseInt(this.bilpopu) + parseInt(this.kelahiran) - parseInt(this.kematian);
  }

  bilkematian : string;
  jumpenduduk : string;
  kadarkematian : number;

  KadarKematian (){
    this.kadarkematian = parseInt(this.bilkematian) / parseInt(this.jumpenduduk) * 1000;
  }

  bilpopulasi : string;
  kk : string;
  bilkelahiran : number;

  BilKelahiran (){
    this.bilkelahiran = parseInt(this.bilpopulasi) / 1000 * parseFloat(this.kk);
    // Math.round(this.bilkelahiran);
  }

  bilkel : string;
  jumlahpen : string;
  kadarkelahiran : number;

  KadarKelahiran (){
    this.kadarkelahiran = parseInt(this.bilkel) / parseInt(this.jumlahpen) * 1000;
  }
  bilpop : string;
  kkn : string;
  bilkem : number;

  BilKematian (){
    this.bilkem = (parseInt(this.bilpop) / 1000 ) * parseFloat(this.kkn);
  }

  luastanah : string;
  lotsedia : string;
  keluasanlot : number;

  KeluasanLot (){
    this.keluasanlot = parseInt(this.luastanah) / parseInt(this.lotsedia); 
  }
 
  luasseluruhtanah : string;
  luastanahguna : string;
  keseluruhantanah : number;

  KeseluruhanTanah (){
    this.keseluruhantanah = parseFloat(this.luasseluruhtanah) - parseFloat(this.luastanahguna); 
  }
 
  luaslotkosong : string;
  satulot : string;
  billotkosong : number;

  LotKosong (){
    this.billotkosong = parseFloat(this.luaslotkosong) / parseFloat(this.satulot); 
  }

  view: any[] = [900, 400];

  onResize(event) {
    this.view = [event.target.innerWidth / 1.35, 400];
}
  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Tahun';
  showYAxisLabel = true;
  yAxisLabel = 'Jumlah Kematian';
  timeline = true;
  colorScheme = {
    domain: ['#87CEFA']
  };
  //pie
  showLabels = true;

  // data mengikut tahun
public year = [
  {
    "name": "Tidak ternyata",
    "value": 4
  },
  {
    "name": "1954",
    "value": 1
  },
  {
    "name": "2003",
    "value": 2
  },
  {
    "name": "2004",
    "value": 2
  },
  {
    "name": "2005",
    "value": 16
  },
  {
    "name": "2006",
    "value": 23
  },
  {
    "name": "2007",
    "value": 30
  },
  {
    "name": "2008",
    "value": 48
  },
  {
    "name": "2009",
    "value": 50
  },
  {
    "name": "2010",
    "value": 57
  },
  {
    "name": "2011",
    "value": 58
  },
  {
    "name": "2012",
    "value": 89
  },
  {
    "name": "2013",
    "value": 94
  },
  {
    "name": "2014",
    "value": 77
  },
  {
    "name": "2015",
    "value": 121
  },
  {
    "name": "2016",
    "value": 137
  },
  {
    "name": "2017",
    "value": 129
  },
  {
    "name": "2018",
    "value": 135
  },
  {
    "name": "2019",
    "value": 7
  },
  {
    "name": "2020",
    "value": 0
  }
];

}