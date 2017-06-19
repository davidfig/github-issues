var jsonfile = require('jsonfile');
var vscode = require('vscode');
var window = vscode.window;
var commands = vscode.commands;
var Uri = vscode.Uri;
var workspace = vscode.workspace;

exports.activate = function (context)
{
    var disposable = vscode.commands.registerCommand('extension.githubIssues', open);
    context.subscriptions.push(disposable);
};

exports.deactivate = function ()
{
};

async function open()
{
    let repository;
    try
    {
        const package = jsonfile.readFileSync(workspace.rootPath + '/package.json');
        repository = package.repository;
    }
    catch (e)
    {
        window.showErrorMessage('package.json not found in workspace.');
        return;
    }
    if (repository.url)
    {
        const beginning = 'https://github.com/';
        if (repository.url.indexOf(beginning) === 0)
        {
            const remaining = repository.url.substring(('https://github.com/').length);
            const names = remaining.split('/');
            let uri = Uri.parse('https://github.com/' + names[0] + '/' + names[1].replace('.git', '') + '/issues/');
            commands.executeCommand('vscode.open', uri);
        }
        else
        {
            window.showErrorMessage('package.json repository.url entry should be in form of "https://github.com/user/repository.git"');
        }
    }
    else if (repository)
    {
        const parts = repository.split(':');
        if (parts[0] !== 'git@github.com')
        {
            window.showErrorMessage('package.json repository should be in the form git@github.com:/user/repository.git');
            return;
        }
        const names = parts[1].split('/');
        let uri = Uri.parse('https://github.com/' + names[0] + '/' + names[1].replace('.git', '') + '/issues/');
        commands.executeCommand('vscode.open', uri);
    }
    else
    {
        window.showErrorMessage('package.json does not have a repository entry.')
    }
}