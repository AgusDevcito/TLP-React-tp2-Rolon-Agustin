export class Cola<T> {
  #items: { [key: number]: T } = {};
  #frente: number = 0;
  #final: number = 0;
  
  encolar(elemento: T): void {
    this.#items[this.#final] = elemento;
    this.#final++;
  }
  
  desencolar(): T | undefined {
    if (this.estaVacia()) return undefined;
    const elemento = this.#items[this.#frente];
    delete this.#items[this.#frente];
    this.#frente++;
    return elemento;
  }
  
  verFrente(): T | undefined {
    if (this.estaVacia()) return undefined;
    return this.#items[this.#frente];
  }
  
  estaVacia(): boolean {
    return this.#frente === this.#final;
  }
  
  vaciar(): void {
    this.#items = {};
    this.#frente = 0;
    this.#final = 0;
  }
  
  get tamanio(): number {
    return this.#final - this.#frente;
  }
  
  aArray(): T[] {
    const arr: T[] = [];
    for (let i = this.#frente; i < this.#final; i++) {
      arr.push(this.#items[i]);
    }
    return arr;
  }
}
