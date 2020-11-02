import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['checkboxAll', 'checkbox']

  connect() {
    if (!this.hasCheckboxAllTarget) return

    this.checkboxAllTarget.addEventListener('change', this.toggle)
    this.checkboxTargets.forEach(checkbox => checkbox.addEventListener('change', this.refresh))
    this.refresh()
  }

  disconnect() {
    if (!this.hasCheckboxAllTarget) return

    this.checkboxAllTarget.removeEventListener('change', this.toggle)
    this.checkboxTargets.forEach(checkbox => checkbox.removeEventListener('change', this.refresh))
  }

  toggle = e => {
    e.preventDefault()

    this.checkboxTargets.forEach(checkbox => {
      checkbox.checked = e.target.checked
    })
  }

  refresh = () => {
    const checkboxesCount = this.checkboxTargets.length
    const checkboxesCheckedCount = this.checkboxTargets.filter(checkbox => checkbox.checked).length

    this.checkboxAllTarget.checked = checkboxesCheckedCount > 0
    this.checkboxAllTarget.indeterminate = checkboxesCheckedCount > 0 && checkboxesCheckedCount < checkboxesCount
  }
}
