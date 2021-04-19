import { Component, Input, OnInit, Type } from '@angular/core';

@Component({
  selector: 'app-main-chart',
  templateUrl: './main-chart.component.html',
  styleUrls: ['./main-chart.component.css']
})
export class MainChartComponent implements OnInit {
  constructor() { }

  public type;
  public data;
  public options;
  public Mensal: Array<Number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


  @Input() ValorHist;
  @Input() DataHist;

  @Input() jan = 0;
  @Input() fev = 0;
  @Input() mar = 0;
  @Input() abr = 0;
  @Input() mai = 0;
  @Input() jun = 0;
  @Input() jul = 0;
  @Input() ago = 0;
  @Input() set = 0;
  @Input() out = 0;
  @Input() nov = 0;
  @Input() dez = 0;

  @Input() meses: Array<string> = [];

  //  0-Valor     1-Data
  reciverFeedback($event) {
    try {
      this.DataHist = $event;
      this.PlotaChart();
    } catch (error) {
      console.log(error);
    }
  }

  LocalGetItens(){
    // Pega os valores do localStorage e projeta de início.
    let StrValues = localStorage.getItem("Value");
    let StrType = localStorage.getItem("Type");
    let StrReceiver = localStorage.getItem("Receiver");
    let StrData = localStorage.getItem("Data");

    console.log(StrValues);
    console.log(StrType, StrReceiver, StrData);

    // Testa para ver se existe localStorage
    if (StrValues != null && StrType != null && StrReceiver != null && StrData != null){
      var Values = StrValues.split(';');
      var Type = StrType.split(';');
      var Receiver = StrReceiver.split(';');
      var Data = StrData.split(';')
    
      let i = 0;

      for (var item of Data){
        let DataToda = item.split('-');
        let Date = parseInt(DataToda[1]) - 1;

        if(Type[i] == "Pay")
          Values[i] = '-'+Values[i];

        console.log(Number(Values[i]));

        switch(Date){
          case 0:
            this.jan += Number(Values[i]);
            break;
          case 1:
            this.fev += Number(Values[i]);
            break;
          case 2:
            this.mar += Number(Values[i]);
            break;
          case 3:
            this.abr += Number(Values[i]);
            break;
          case 4:
            this.mai += Number(Values[i]);
            break;
          case 5:
            this.jun += Number(Values[i]);
            break;
          case 6:
            this.jul += Number(Values[i]);
            break;
          case 7:
            this.ago += Number(Values[i]);
            break;
          case 8:
            this.set += Number(Values[i]);
            break;
          case 9:
            this.out += Number(Values[i]);
            break;
          case 10:
            this.nov += Number(Values[i]);
            break;
          case 11:
            this.dez += Number(Values[i]);
            break;
          default:
            console.log("Default ativado");
            break;
        }
        i += 1;
        console.log(item);
      }
    }

  }

  ngOnInit(): void {
    this.type = 'line';

    this.LocalGetItens();
    this.data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Active Users",
        borderColor: "#e14eca",
        pointBorderColor: "#e14eca",
        pointBackgroundColor: "#e14eca",
        pointBorderWidth: 1,
        pointHoverRadius: 1,
        pointHoverBorderWidth: 1,
        pointRadius: 6,
        fill: true,
        backgroundColor: false,
        borderWidth: 1,
        data: [this.jan, this.fev, this.mar, this.abr, this.mai, this.jun, this.jul, this.ago, this.set, this.out, this.nov, this.dez],
      }]
    };
    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      legend: false,
      scales: {
        xAxes: [
          {
            stacked: true,
            ticks: {
              fontColor: "#e14eca",
            },
            gridLines: {
            }
          }
        ],
        yAxes: [
          {
            stacked: true,
            ticks: {
              fontColor: "#e14eca",
            },
            gridLines: {
              color: 'rgb(145, 230, 50, 0)',
            }
          }
        ]
      }
    };
  }

  PlotaChart(){
    let infos = this.DataHist.split(',');
    let dados = infos[1].split('-');

    console.log(infos);
    this.ValorHist =  Number(infos[0]);


    //[ Valor, Ano, Mes, Dia]
    let year = dados[0];
    let mont = dados[1];
    let month = parseInt(mont);
    console.log(dados);
    let day = dados[2];

    switch(month){
      case 0:
        this.jan += this.ValorHist;
        break;
      case 1:
        this.fev += this.ValorHist;
        break;
      case 2:
        this.mar += this.ValorHist;
        break;
      case 3:
        this.abr += this.ValorHist;
        break;
      case 4:
        this.mai += this.ValorHist;
        break;
      case 5:
        this.jun += this.ValorHist;
        break;
      case 6:
        this.jul += this.ValorHist;
        break;
      case 7:
        this.ago += this.ValorHist;
        break;
      case 8:
        this.set += this.ValorHist;
        break;
      case 9:
        this.out += this.ValorHist;
        break;
      case 10:
         this.nov += this.ValorHist;
         break;
      case 11:
        this.dez += this.ValorHist;
        break;
      default:
        console.log("Default ativado");
        break;
    }

    this.data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Active Users",
        borderColor: "#e14eca",
        pointBorderColor: "#e14eca",
        pointBackgroundColor: "#e14eca",
        pointBorderWidth: 1,
        pointHoverRadius: 1,
        pointHoverBorderWidth: 1,
        pointRadius: 6,
        fill: true,
        backgroundColor: false,
        borderWidth: 1,
        data: [this.jan, this.fev, this.mar, this.abr, this.mai, this.jun, this.jul, this.ago, this.set, this.out, this.nov, this.dez],
      }]
    };
  }
}
