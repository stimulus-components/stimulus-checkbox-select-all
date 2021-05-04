import { Application } from 'stimulus'
import CheckboxSelectAll from '../src/index'

const startStimulus = () => {
  const application = Application.start()
  application.register('checkbox-select-all', CheckboxSelectAll)
}

beforeEach(() => {
  startStimulus()

  document.body.innerHTML = `
    <form data-controller="checkbox-select-all">
      <input id="checkbox-select-all" type="checkbox" data-checkbox-select-all-target="checkboxAll" />
      <input type="checkbox" data-checkbox-select-all-target="checkbox" />
      <input type="checkbox" data-checkbox-select-all-target="checkbox" checked="checked" />
      <input type="checkbox" data-checkbox-select-all-target="checkbox" />
    </form>
  `
})

describe('#toggle', () => {
  it('should select all checkboxes', () => {
    const toggleCheckbox = document.querySelector('#checkbox-select-all')
    const targetsBefore = document.querySelectorAll("[data-checkbox-select-all-target='checkbox']:checked")

    expect(targetsBefore.length).toBe(1)

    // Uncheck all
    toggleCheckbox.click()

    // Check all
    toggleCheckbox.click()

    const targetsAfter = document.querySelectorAll("[data-checkbox-select-all-target='checkbox']:checked")

    expect(targetsAfter.length).toBe(3)
  })
})

describe('#refresh', () => {
  it('change the checkboxAll state', () => {
    const toggleCheckbox = document.querySelector('#checkbox-select-all')

    expect(toggleCheckbox.checked).toBe(true)
    expect(toggleCheckbox.indeterminate).toBe(true)
  })
})
