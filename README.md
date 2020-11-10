# Stimulus Checkbox Select All

[![](https://img.shields.io/npm/dt/stimulus-checkbox-select-all.svg)](https://www.npmjs.com/package/stimulus-checkbox-select-all)
[![](https://img.shields.io/npm/v/stimulus-checkbox-select-all.svg)](https://www.npmjs.com/package/stimulus-checkbox-select-all)
[![](https://github.com/stimulus-components/stimulus-checkbox-select-all/workflows/Lint/badge.svg)](https://github.com/stimulus-components/stimulus-checkbox-select-all)
[![](https://github.com/stimulus-components/stimulus-checkbox-select-all/workflows/Test/badge.svg)](https://github.com/stimulus-components/stimulus-checkbox-select-all)
[![](https://img.shields.io/github/license/stimulus-components/stimulus-checkbox-select-all.svg)](https://github.com/stimulus-components/stimulus-checkbox-select-all)
[![Netlify Status](https://api.netlify.com/api/v1/badges/073b5fee-358d-4dbf-b807-52034690f8ef/deploy-status)](https://stimulus-checkbox-select-all.netlify.com)

## Getting started

A Stimulus controller for managing checkbox lists.

## Video Tutorial

[Chris Oliver](https://twitter.com/excid3) from [GoRails](https://gorails.com/) has released a presentation video on how to use this package with a real life example with Ruby on Rails.

👉 Take a look: [Bulk Operations in Rails](https://gorails.com/episodes/bulk-operations-in-rails)

## Installation

```bash
$ yarn add stimulus-checkbox-select-all
```

And use it in your JS file:
```js
import { Application } from "stimulus"
import CheckboxSelectAll from "stimulus-checkbox-select-all"

const application = Application.start()
application.register("checkbox-select-all", CheckboxSelectAll)
```

## Usage

### Without Rails

```html
<table>
  <tbody>
    <td class="block">
      <label>
        <input type="checkbox" data-target="checkbox-select-all.checkboxAll" />
        <span>Select All / Deselect All</span>
      </label>
    </td>

    <td class="block">
      <label>
        <input type="checkbox" data-target="checkbox-select-all.checkbox" value="1" />
        <span>Team 1</span>
      </label>
    </td>

    <td class="block">
      <label>
        <input type="checkbox" data-target="checkbox-select-all.checkbox" checked="checked" value="2" />
        <span>Team 2</span>
      </label>
    </td>

    <td class="block">
      <label>
        <input type="checkbox" data-target="checkbox-select-all.checkbox" value="3" />
        <span>Team 3</span>
      </label>
    </td>
  </tbody>
</table>
```

### With Rails

In your models:
```ruby
class User < ApplicationRecord
  has_many :teams
end

class Team < ApplicationRecord
  belongs_to :user
end
```

In your controller:
```ruby
class UsersController < ApplicationController
  def update
    if user.update(user_params)
      redirect_to users_path
    else
      render :edit
    end
  end

  private

  def user_params
    params
      .require(:user)
       .permit(
         team_ids: []
       )
  end
end
```

In your view:
```html
<%= form_with model: @user, data: { controller: 'checkbox-select-all' } do |f| %>
  <label>
    <input type="checkbox" data-target="checkbox-select-all.checkboxAll" />
    <span>Select All / Deselect All</span>
  </label>

  <%= f.collection_check_boxes :team_ids, Team.all, :id, :name do |b| %>
    <%= b.label do %>
      <%= b.check_box data: { target: 'checkbox-select-all.checkbox' } %>
      <%= b.text %>
    <% end %>
  <% end %>
<% end %>
```

## Extending Controller

You can use inheritance to extend the functionality of any Stimulus components.

```js
import CheckboxSelectAll from "stimulus-checkbox-select-all"

export default class extends CheckboxSelectAll {
  connect() {
    super.connect()
    console.log("Do what you want here.")

    // Get all checked checkboxes
    this.checked

    // Get all unchecked checkboxes
    this.unchecked
  }
}
```

These controllers will automatically have access to targets defined in the parent class.

If you override the connect, disconnect or any other methods from the parent, you'll want to call `super.method()` to make sure the parent functionality is executed.

## Development

### Project setup
```bash
$ yarn install
$ yarn dev
```

### Tests

[Jest](https://jestjs.io/) and [Puppeteer](https://github.com/puppeteer/puppeteer) are responsible to test this component:
```bash
$ yarn test
```

### Linter
[Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) are responsible to lint and format this component:
```bash
$ yarn lint
$ yarn format
```

## Contributing

Do not hesitate to contribute to the project by adapting or adding features ! Bug reports or pull requests are welcome.

## License

This project is released under the [MIT](http://opensource.org/licenses/MIT) license.
