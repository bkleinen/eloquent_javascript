/*
Pathnames that start with /, ./, or ../ are resolved relative to the
current module’s path,

When a string that does not look like a relative or absolute path is given
to require, it is assumed to refer to
either a built-in module or a module installed in a node_modules directory.
 */