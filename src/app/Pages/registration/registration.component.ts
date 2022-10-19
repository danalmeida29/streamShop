import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/Core/event.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  clienteForm!: FormGroup;
  mostrar:any;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute,
    private eventService: EventService
    ) { }

    error!: Error;

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.clienteForm = this.formBuilder.group({
      id: [null],
      name:[null,[Validators.required, Validators.minLength(3)]],
      phone:[null, Validators.required],
      email:[null,[Validators.email, Validators.required]],
      checkBoxNotificação: [null],
      checkBoxTermo: [null]
    })
  }

  onNavigateTo(pageName: any) {
    this.router.navigate([`/${pageName}`]);
  }

  onSubmit() {
    const formData = this.clienteForm.getRawValue();
    console.log(formData);

    let msgSuccess = 'Cadastro criado com sucesso!';
    let msgError = 'ERRO ao criar cadastro. Tente novamente!';


    this.eventService.save(this.clienteForm.value).subscribe(
      success => {
        alert(msgSuccess);
      },
      error => {
        alert(msgError);
      }
    );
  }
}
