//Your job is to make a "Twitter link" regular expression rx. This RegEx searches a tweet to find the @handle and the #handle.
//The function is already written in the Tests tab, so you only need to provide the RegEx variable in the Code tab.
//Only return the @ and # handles.

const rx = /[@#][a-z]+/gi;