# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- **Breaking** `data-target="checkbox-select-all.checkboxAll"` is now required.
- **Breaking** `data-action="change->checkbox-select-all#toggle"` has been be removed.
```diff
- <input type="checkbox" data-action="change->checkbox-select-all#toggle" />
+ <input type="checkbox" data-target="checkbox-select-all.checkboxAll" />
```

## [1.1.0] - 2020-10-29

### Added

- Indeterminate state support

Add `data-target="checkbox-select-all.checkboxAll"` attribute to use it. It's optional.
```diff
- <input type="checkbox" data-action="change->checkbox-select-all#toggle" />
+ <input type="checkbox" data-target="checkbox-select-all.checkboxAll" data-action="change->checkbox-select-all#toggle" />
```

### Changed
- Adding `stimulus` as `peerDependencies`

## [1.0.0] - 2020-10-15

### Added

- Adding controller
