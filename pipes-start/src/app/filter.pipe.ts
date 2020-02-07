import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString, propname): any {
    var arr =[];
    if( value.length == 0 || filterString==''){
      return value;
    }
    //console.log(value + " "+ filterString+" "+propname);
    for (var server of value){
      if(server[propname] === filterString){
       // console.log('inside' + " "+ filterString+" "+propname);
        
    
        arr.push(server);
      }
    }
    return arr;
  }

}
