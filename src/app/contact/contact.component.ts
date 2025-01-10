import { Component } from '@angular/core';
import { LineComponent } from "../line/line.component";
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface InputField {
  placeholder: string;
  dataType: string;
  inputValue: string;
  inputValueLength: number;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [NgFor,LineComponent,FormsModule],
})
export class ContactComponent {
  inputFields: InputField[] = [
    {
      placeholder: 'Name',
      dataType: 'text',
      inputValue: '',
      inputValueLength: 0,
    },
    {
      placeholder: 'Age',
      dataType: 'text',
      inputValue: '',
      inputValueLength: 0,
    },
    {
      placeholder: 'Email',
      dataType: 'email',
      inputValue: '',
      inputValueLength: 0,
    },
    {
      placeholder: 'Password',
      dataType: 'password',
      inputValue: '',
      inputValueLength: 0,
    },
  ];

  getLength(index: number) {
    this.inputFields[index].inputValueLength =
      this.inputFields[index].inputValue.length;
  }
}