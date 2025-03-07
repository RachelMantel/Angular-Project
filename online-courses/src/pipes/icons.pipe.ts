import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icons',
  standalone: true
})

export class IconsPipe implements PipeTransform {

  transform(value: string): any {
    switch (value) {
      case "list":
        return "📖";
    }

  }
}