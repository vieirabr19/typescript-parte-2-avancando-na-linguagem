import { Negociacoes } from '../models/negociacoes';

export class NegociacoesView {
  private elemento: HTMLElement;

  constructor(seletor: string){
    this.elemento = document.querySelector(seletor);
  }

  template(model: Negociacoes): string {
    return `
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
          ${model.lista().map(negociacao => {
            return `
              <tr>
                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;
  }

  update(model: Negociacoes): void {
    this.elemento.innerHTML = this.template(model);
  }
}