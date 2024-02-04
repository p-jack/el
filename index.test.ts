/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { el } from "./index"

test("inner", () => {
  const h1 = el("h1").inner("Hello, world!")
  expect(h1.innerText).toBe("Hello, world!")
})

test("attrs", () => {
  const input = el("input").attrs({type:"text", class:"myclass"})
  expect(input.getAttribute("type")).toBe("text")
  expect(input.className).toBe("myclass")
  input.attrs({type:undefined, class:undefined})
  expect(input.getAttribute("type")).toBeNull()
  expect(input.getAttribute("class")).toBeNull()
})

test("add", () => {
  const input = el("input", { type:"text" })
  const label = el("label", { for: input.id })
  const form = el("form").add(label, input)
  expect(form.childElementCount).toBe(2)
  expect(form.children.item(0)).toBe(label)
  expect(form.children.item(1)).toBe(input)
})

test("on", () => {
  let worked = false
  const input = el("input", { type:"text" }).on("input", (event) => {
    worked = true
  })
  input.dispatchEvent(new Event("input"))
  expect(worked).toBe(true)
})
