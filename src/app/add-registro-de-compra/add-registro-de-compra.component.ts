import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';  
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-registro-de-compra',
  templateUrl: './add-registro-de-compra.component.html',
  styleUrls: ['./add-registro-de-compra.component.css']
})


export class AddRegistroDeCompraComponent implements OnInit {
  RegisterForm: FormGroup;
  @Input() Value: string;
  @Input() Type: string;
  @Input() Receiver: string;
  @Input() Description: string;
  @Input() Data: Date;

  @Output() Envia = new EventEmitter();

  public Dados: Array<string> = [];

  public localVal;
  public localType;
  public localData;


  constructor(private fb: FormBuilder) { 
  }

  ngOnInit() {
    this.RegisterForm = this.fb.group({
      Value: new FormControl(),
      Type: new FormControl(),
      Receiver: new FormControl,
      Description: new FormControl(),
      Data: new FormControl()
    })  
  }

  Feedback(FG: NgForm){
    // Seta os valores quando chega
    this.RegisterForm.setValue({Value: FG.value['Value'], Type: FG.value['Type'],  Receiver: FG.value['Receiver'], Description: FG.value['Description'], Data: FG.value['Data']});

    // Define as variáveis de class
    this.Value = this.getValue();
    this.Type = this.getType();
    this.Receiver = this.getReceiver();
    this.Data = this.getData();

    //Define os valores para LocalStorage caso necessário
    if (typeof(this.getLocalVal() ) == null) {
      console.log("AAAAAAAAAAAAAAAA");
      localStorage.setItem("Value",  "00");
      localStorage.setItem("Type", "Pay");
    }
    localStorage.setItem("Value",  this.getLocalVal());
    localStorage.setItem("Type", this.getLocalType());
    localStorage.setItem("Receiver", this.getLocalRec());
    localStorage.setItem("Data", this.getLocalData());


    // Adiciona no array para impressão na tela
    this.Dados.push(this.Receiver, this.Type, this.Value, this.Data.toString());
    this.enviaDados();
  }

  enviaDados(){
    // Manda o registro pra plotar na chart
    if (this.Type == "Pay")
      this.Envia.emit(`${-this.Value}, ${this.Data}`);
    else
      this.Envia.emit(`${this.Value}, ${this.Data}`);
  }

  getLocalVal(){
    if (localStorage.getItem("Value") != null)
      return this.Value + ';'+ localStorage.getItem("Value");
    else
      return this.Value;
  }

  getLocalType(){
    if (localStorage.getItem("Type") != null)
      return this.Type.toString() + ';'+ localStorage.getItem("Type");
    else
      return this.Type;
  }

  getLocalRec(){
    if (localStorage.getItem("Receiver") != null)
      return this.Receiver.toString() + ';'+ localStorage.getItem("Receiver");
    else
      return this.Receiver;
  }

  getLocalData(){
    if (localStorage.getItem("Data") != null)
      return this.Data + ';' + localStorage.getItem("Data");
    else
      return this.Data.toString();
  }

  converType(str: string){
    console.log(str);
    if (str == 'Pay'){
      return 1;
    }
    else{
      return 0;
    }
  }

  getValue(){
    return this.RegisterForm.get('Value').value;
  }

  getType(){
    if (this.RegisterForm.get('Type').value == '1'){
      return 'Pay';
    }
    else{
      return 'Receive';
    }
  }

  getReceiver(){
    return this.RegisterForm.get('Receiver').value;
  }

  getData(){
    return this.RegisterForm.get('Data').value;
  }
}
