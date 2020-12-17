import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel, FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogsService } from '../blogs.service';
import { mimeType } from './mime-type.validator';



@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  submitDone: Boolean = false;
  error: string = "";
  form: FormGroup;
  imagePreview;
  constructor(public blogsService: BlogsService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'name': new FormControl(null, { validators: [Validators.required] }),
      'title': new FormControl(null, { validators: [Validators.required] }),
      'image': new FormControl(null, { validators: [Validators.required], asyncValidators: [mimeType] }),
      'body': new FormControl(null, { validators: [Validators.required] })
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;

    };
    reader.readAsDataURL(file);

  }



  onSubmit() {
    if (this.form.valid) {
      this.blogsService.addBlog(this.form.value.name, this.form.value.title, this.form.value.body, this.form.value.image);
      this.form.reset();
      this.imagePreview = null;
      this.submitDone = true;

    }
    else {
      this.error = "Please Enter Valid field values";
    }

  }

} 
