# el

`el` is a tiny library to **programmatically create DOM trees** from scripts:

    import { "el" } from "@pjack/el"
        
    document.body.add(
      el("h1").inner("el"),
      el("p").add(
        el("code").inner("el"),
        el("span").inner("is a tiny library to"),
        el("b").inner("programmatically create DOM trees"),
        el("span").inner("from scripts.")
      )
    )

The `el` function takes a tag name and produces an HTMLElement instance:

    const div = el("div")

You can also pass attributes to it, and they will be added to the result:

    const emailInput = el("input", {type:"email"})

This library also monkey patches HTMLElement with "fluent" functions:

* The _inner_ function sets the innerText of the element and returns
  the element:

        const p = el("p").inner("Hello, world!")

* The _attrs_ function sets or removes attributes from an element and
  returns the element:

        const p = el("input").attrs({type:"text", id:"id"})

* The _add_ function appends child elements to a parent element, and
  returns the parent:

        const ul = el("ul").add(
          el("li").inner("One"),
          el("li").inner("Two"),
          el("li").inner("Three")
        )

* The _on_ function adds an event listener to an element and returns
  the element:

        const submit = el("input", {type:"submit"}).on("click", ()=>{
          console.log("Clicked!")
        })

