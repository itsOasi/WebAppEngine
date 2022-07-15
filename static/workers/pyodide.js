self.addEventListener("install", (event) => {
    fetch("https://cdn.jsdelivr.net/pyodide");
    console.log("pyodide.js installed!");
})

self.addEventListener("activate", () =>)

async function load(file_loc) {
    let pyodide = await loadPyodide();
    // Pyodide is now ready to use...
    let text = load.as_text(file_loc)
    console.log(pyodide.runPython(text));
  };
  main();