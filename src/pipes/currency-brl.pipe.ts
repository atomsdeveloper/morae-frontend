// Module
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyBRL',
  standalone: true,
})
export class CurrencyBRLPipe implements PipeTransform {
  transform(value: number | string | null | undefined): string {
    if (value == null) return '';
    const numberValue = typeof value === 'string' ? Number(value) : value;

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(numberValue);
  }
}
