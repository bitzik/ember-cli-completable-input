# Ember-cli-completable-input

This add-on hosts an ember component used on the [bitzik](www.bitzik.com) web-app. 

For who ever might want a text input that offers completions please try this one!

[Live Demo](http://bitzik.github.io/ember-cli-completable-input/)

## Installation
Just like for any other Ember-cli addon, use `ember install:addon`

    ember install:addon ember-cli-completable-input

## Usage

### Basic
The simplest way to use this addon is to place the following in your handlebar template:

    {{completable-input
      value=The input value
      placeholder=A placeholder
      complements=Link that one to the property of your controller/view that holds all the possible completions
    }}
    
And that's it.

You can also link/fix the following parameters:

+ *selectedCompletion*: will be set to the completion the user is currently selecting with the keyboard or has selected with the pointer.
+ *caseSensitive*: False by default. Allows you to specify if you care about the case or not.
+ *minForComplement*: Set this parameter to determine how many character should the user type before the completion appear.

### Advanced (aka thanks god ember is great!)

Feel free to update the `complements` as often as you want!
For instance, if you want to fetch existing tags, feel free to use the `value` parameter to get the prefix, call your backend and fill up `complements` with the returned value.
The `completable-input` will handle it nicely. The same way, you would like to limit the number of complements displayed to only show 10 candidates at most? Feel free to do so. 
Ember is GREAT!

### CSS customization?
Please check [this page](http://bitzik.github.io/ember-cli-completable-input) for more information

## Remarks
If you have any remarks about this addon please don't hesitate to [contact me](leo.jpod+npm@gmail.com) or to open a pull-request.
Your contribution is welcome!

