
[broccoli](http://broccolijs.com/)-file-contents-to-json
================================================

Read in some files, output a JSON representation of their contents.

Installation
------------

```shell
$ npm install broccoli-file-contents-to-json
```


How it works
------------

Given a nested directory of files like so,

```
my-files
├── bar.txt
├── foo.txt
└── my-folder
    └── baz.txt
```

**broccoli-file-contents-to-json** reads in each file, and outputs a _single JSON file_, say `output.json`, representing the _contents_ of each file within the folder. Here's an example output:


```json
{
  "bar.txt": "Content of bar.",
  "foo.txt": "Contents of foo.",
  "my-folder/baz.txt": "Contents of baz."
}
```

Now, you can use `output.json` however you'd like.


How to Use
----------

See the `Brocfile` packaged in this project for an example of how to use

Author
----------
| ![twitter/brianmgonzalez](http://gravatar.com/avatar/f6363fe1d9aadb1c3f07ba7867f0e854?s=70](http://twitter.com/brianmgonzalez "Follow @brianmgonzalez on Twitter") |
|---|
| [Brian Gonzalez](http://briangonzalez.org) |


License
--------

MIT
