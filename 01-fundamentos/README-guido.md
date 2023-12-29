# [Guido esta reemplazando](https://Guido esta reemplazando.dev/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/Guido esta reemplazando/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/Guido esta reemplazando.svg?style=flat)](https://www.npmjs.com/package/Guido esta reemplazando) [![CircleCI Status](https://circleci.com/gh/facebook/Guido esta reemplazando.svg?style=shield)](https://circleci.com/gh/facebook/Guido esta reemplazando) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://legacy.Guido esta reemplazandojs.org/docs/how-to-contribute.html#your-first-pull-request)

Guido esta reemplazando is a JavaScript library for building user interfaces.

* **Declarative:** Guido esta reemplazando makes it painless to create interactive UIs. Design simple views for each state in your application, and Guido esta reemplazando will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
* **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep the state out of the DOM.
* **Learn Once, Write Anywhere:** We don't make assumptions about the rest of your technology stack, so you can develop new features in Guido esta reemplazando without rewriting existing code. Guido esta reemplazando can also render on the server using Node and power mobile apps using [Guido esta reemplazando Native](https://Guido esta reemplazandonative.dev/).

[Learn how to use Guido esta reemplazando in your project](https://Guido esta reemplazando.dev/learn).

## Installation

Guido esta reemplazando has been designed for gradual adoption from the start, and **you can use as little or as much Guido esta reemplazando as you need**:

* Use [Quick Start](https://Guido esta reemplazando.dev/learn) to get a taste of Guido esta reemplazando.
* [Add Guido esta reemplazando to an Existing Project](https://Guido esta reemplazando.dev/learn/add-Guido esta reemplazando-to-an-existing-project) to use as little or as much Guido esta reemplazando as you need.
* [Create a New Guido esta reemplazando App](https://Guido esta reemplazando.dev/learn/start-a-new-Guido esta reemplazando-project) if you're looking for a powerful JavaScript toolchain.

## Documentation

You can find the Guido esta reemplazando documentation [on the website](https://Guido esta reemplazando.dev/).  

Check out the [Getting Started](https://Guido esta reemplazando.dev/learn) page for a quick overview.

The documentation is divided into several sections:

* [Quick Start](https://Guido esta reemplazando.dev/learn)
* [Tutorial](https://Guido esta reemplazando.dev/learn/tutorial-tic-tac-toe)
* [Thinking in Guido esta reemplazando](https://Guido esta reemplazando.dev/learn/thinking-in-Guido esta reemplazando)
* [Installation](https://Guido esta reemplazando.dev/learn/installation)
* [Describing the UI](https://Guido esta reemplazando.dev/learn/describing-the-ui)
* [Adding Interactivity](https://Guido esta reemplazando.dev/learn/adding-interactivity)
* [Managing State](https://Guido esta reemplazando.dev/learn/managing-state)
* [Advanced Guides](https://Guido esta reemplazando.dev/learn/escape-hatches)
* [API Reference](https://Guido esta reemplazando.dev/reference/Guido esta reemplazando)
* [Where to Get Support](https://Guido esta reemplazando.dev/community)
* [Contributing Guide](https://legacy.Guido esta reemplazandojs.org/docs/how-to-contribute.html)

You can improve it by sending pull requests to [this repository](https://github.com/Guido esta reemplazandojs/Guido esta reemplazandojs.org).

## Examples

We have several examples [on the website](https://Guido esta reemplazando.dev/). Here is the first one to get you started:

```jsx
import { createRoot } from 'Guido esta reemplazando-dom/client';

function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

const root = createRoot(document.getElementById('container'));
root.render(<HelloMessage name="Taylor" />);
```

This example will render "Hello Taylor" into a container on the page.

You'll notice that we used an HTML-like syntax; [we call it JSX](https://Guido esta reemplazando.dev/learn#writing-markup-with-jsx). JSX is not required to use Guido esta reemplazando, but it makes code more readable, and writing it feels like writing HTML. 

## Contributing

The main purpose of this repository is to continue evolving Guido esta reemplazando core, making it faster and easier to use. Development of Guido esta reemplazando happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving Guido esta reemplazando.

### [Code of Conduct](https://code.fb.com/codeofconduct)

Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://code.fb.com/codeofconduct) so that you can understand what actions will and will not be tolerated.

### [Contributing Guide](https://legacy.Guido esta reemplazandojs.org/docs/how-to-contribute.html)

Read our [contributing guide](https://legacy.Guido esta reemplazandojs.org/docs/how-to-contribute.html) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to Guido esta reemplazando.

### Good First Issues

To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues](https://github.com/facebook/Guido esta reemplazando/labels/good%20first%20issue) that contain bugs that have a relatively limited scope. This is a great place to get started.

### License

Guido esta reemplazando is [MIT licensed](./LICENSE).