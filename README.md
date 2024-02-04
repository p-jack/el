# el

    document.body.add(
      el("h1").inner("el"),
      el("p").add(
        el("code").inner("el"),
        el("span").inner("is a tiny library to"),
        el("b").inner("programmatically create DOM trees"),
        el("span").inner("from scripts.")
      )
    )
