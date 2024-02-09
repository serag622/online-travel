import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'FormatMin' })

export class FormatMin implements PipeTransform {

  constructor() {
  }


  transform(min: number): any {
   let h : number =  Math.floor(min / 60);
   let m : number = min -  (h * 60) ;
   return `${h}h : ${m} m`
  }
}