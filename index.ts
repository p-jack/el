declare global {
  interface HTMLElement {
    add(...children:HTMLElement[]):this
    inner(text:string):this
    attrs(attributes:Record<string,string|undefined>):this
    on(event:keyof HTMLElementEventMap, handler:(event:Event)=>void):this
  }
}

HTMLElement.prototype.add = function(this:HTMLElement, ...children:HTMLElement[]):typeof this {
  this.append(...children)
  return this
}

HTMLElement.prototype.inner = function(this:HTMLElement, text:string):typeof this {
  this.innerText = text
  return this
}

HTMLElement.prototype.attrs = function(this:HTMLElement, attributes:Record<string,string|undefined>):typeof this {
  for (const k in attributes) {
    const v = attributes[k]
    if (v === undefined) {
      this.removeAttribute(k)
    } else {
      this.setAttribute(k, v)
    }
  }
  return this
}

HTMLElement.prototype.on = function(this:HTMLElement, event:keyof HTMLElementEventMap, handler:(event:Event)=>void):typeof this {
  this.addEventListener(event, handler)
  return this
}

export const el = <K extends keyof HTMLElementTagNameMap>(tag:K, attributes:Record<string,string|undefined> = {}):HTMLElementTagNameMap[K] => {
  const result = document.createElement(tag)
  result.attrs(attributes)
  return result
}
