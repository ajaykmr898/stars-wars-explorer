import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'snakeToTitle'
})
export class SnakeToTitlePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace('_', ' ');
  }

}
