import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'toArray'})
export class ToArrayPipe implements PipeTransform {
    transform(value: any) {
        let arrObj = [];
        Object.entries(value).forEach(([key, val]) => {
            let sizeObj = {
                name: key,
                available: val
            }
            arrObj.push(sizeObj);
        });

        return arrObj;
    }
}