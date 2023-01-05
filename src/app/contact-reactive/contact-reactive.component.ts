import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent implements OnInit {
  contactForm !: FormGroup;
  // myField= new FormControl();
  constructor(private readonly fb:FormBuilder) { }

  ngOnInit(): void {
    // this.myField.valueChanges
    this.contactForm=this.initForm();
    // this.onPathValue();
    // this.onSetValue();
  }

  onPathValue():void{
    this.contactForm.patchValue({name:'leslie'})
  }
  onSetValue():void{
    // this.contactForm.setValue({comment:'Hola Mundo'})
  }

  onSubmit():void{
    console.log('Form ->', this.contactForm.value)
  }

  initForm(): FormGroup{
    return this.fb.group({
      name:['',[Validators.required,Validators.minLength(4)]],
      checkAdult:['', [Validators.required]],
      departament:[''],
      comment:['',[Validators.required]]
    })
  }

}
