# github-issues README

Simple extension to open Github Issues page for your current workspace in an external browser.

## Requirements

Workspace must contain a package.json file with a github.com repository entry in one of the following forms:

    package.json file

    ...
    "repository": "git@github.com:davidfig/github-issues.git",

    OR

    ...
    "repository":
    {
        "type": "git",
        "url": "https://github.com/davidfig/github-issues.git"
    },

    OR

    ...
    "repository":
    {
        "type": "git",
        "url": "git+ssh://git@github.com/davidfig/github-issues.git"
    }

## Instructions

After installation, Ctrl/Cmd-Shift-P and type Github Issues or press CTRL/CMD-ALT-i to open Github Issues page for workspace repository.

## Release Notes

## 1.2
 - Added extensions.keybinding for ctrl/cmd-alt-i

### 1.1

Added respoitory.url format. Improved readme instructions.

### 1.0

Initial release of github-issues