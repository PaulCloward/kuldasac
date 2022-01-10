import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampDisplay'
})
export class TimestampDisplayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
