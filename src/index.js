import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['checkboxAll', 'checkbox']

  connect () {
    this.toggle()
  }

  toggleAll (e) {
    e.preventDefault()

    this.checkboxTargets.forEach(checkbox => {
      checkbox.checked = e.target.checked
    })
  }

  toggle () {
    if (!this.hasCheckboxAllTarget) return

    const checkboxesCount = this.checkboxTargets.length
    const checkboxesCheckedCount = this.checkboxTargets.filter(c => c.checked).length

    this.checkboxAllTarget.checked = checkboxesCheckedCount > 0
    this.checkboxAllTarget.indeterminate = checkboxesCheckedCount > 0 && checkboxesCheckedCount < checkboxesCount
  }
}
