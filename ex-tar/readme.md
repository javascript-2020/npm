
      

# ex-tar

**`.tar` and `.tar.gz` / `.tgz` extractor**


<br>


A command line tool for when you just want to unpack something quickly without remembering flags

you dont have access to tar


<br>


## Usage

```

      npx ex-tar <arhive> [target]

```

<br>

|name |desc |
|-----|--------|
|archive|required<br>archive to be unpacked|
|target|optional<br>omitted - use current directory<br>destination folder, will be created if doesnt exist|


<br>

## Notes

- it wont write outside the target directory
 

- you can test it 

  **[online nodejs terminal -- https://ext-code.com/utils/misc/terminal/terminal.html](https://ext-code.com/utils/misc/terminal/terminal.html)**


- download a tarball

```

      npm pack <package> 

```


<br>


## Features

- `ex-tar` is a no-fuss tarball extractor  
- Extracts `.tar` and `.tar.gz` / `.tgz`
- Pure JavaScript — works on Windows, macOS, Linux, and WebContainers
- No global install required
- No flags, configuration or options to remember
- Automatically detects gzip compression
- Extracts into the current working directory if [target] is omitted, creates directory if it does not exist




<br>


## Examples


Extract a `.tar`:

```

      npx ex-tar archive.tar
      
      npx ex-tar archive.tar ./archive

```

Extract a `.tar.gz`:

```

      npx ex-tar archive.tar.gz
      
      npx ex-tar archive.tar.gz ./archive

```


<br>

## Why this exists

Sometimes you just want:

- one file  
- one command  
- one job  

…and you don’t want to install a full tar implementation or deal with platform quirks.  

`ex-tar` is intentionally small and predictable so you can use it anywhere without thinking      




<br>

## source

**[https://github.com/javascript-2020/npm/tree/main/ex-tar](https://github.com/javascript-2020/npm/tree/main/ex-tar)**


<br>
<br>




      
