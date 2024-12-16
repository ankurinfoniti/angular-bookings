import { Injectable } from '@angular/core';
import { NgModel } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  public modelInvalid(model: NgModel): boolean | undefined {
    if (!model.touched) {
      return undefined;
    }

    return model.invalid === true;
  }
}
