import { Controller } from 'stimulus'

export default class extends Controller {
  hasCheckboxAllTarget: boolean
  checkboxTargets: HTMLInputElement[]
  checkboxAllTarget: HTMLInputElement

  static targets: string[] = ['checkboxAll', 'checkbox']

  initialize () {
    this.toggle = this.toggle.bind(this)
    this.refresh = this.refresh.bind(this)
  }

  connect (): void {
    if (!this.hasCheckboxAllTarget) return

    this.checkboxAllTarget.addEventListener('change', this.toggle)
    this.checkboxTargets.forEach(checkbox => checkbox.addEventListener('change', this.refresh))
    this.refresh()
  }

  disconnect (): void {
    if (!this.hasCheckboxAllTarget) return

    this.checkboxAllTarget.removeEventListener('change', this.toggle)
    this.checkboxTargets.forEach(checkbox => checkbox.removeEventListener('change', this.refresh))
  }

  toggle (e: Event): void {
    e.preventDefault()

    this.checkboxTargets.forEach(checkbox => {
      // @ts-ignore
      checkbox.checked = e.target.checked
    })
  }

  refresh (): void {
    const checkboxesCount = this.checkboxTargets.length
    const checkboxesCheckedCount = this.checked.length

    this.checkboxAllTarget.checked = checkboxesCheckedCount > 0
    this.checkboxAllTarget.indeterminate = checkboxesCheckedCount > 0 && checkboxesCheckedCount < checkboxesCount
  }

  get checked (): HTMLInputElement[] {
    return this.checkboxTargets.filter(checkbox => checkbox.checked)
  }

  get unchecked (): HTMLInputElement[] {
    return this.checkboxTargets.filter(checkbox => !checkbox.checked)
  }
}
