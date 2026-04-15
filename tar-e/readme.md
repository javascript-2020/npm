
      

# tar-e

**`.tar` and `.tar.gz` / `.tgz` extractor**


<br>


A command line tool for when you just want to unpack something quickly without remembering flags.


<br>


## Usage

```

      npx tar-e <arhive> [target]

```


<br>

## Test

you can test it 

**[https://ext-code.com/utils/misc/terminal/terminal.html](https://ext-code.com/utils/misc/terminal/terminal.html)**


<br>


## Features

- `tar-e` is a no-fuss tiny streaming extractor  
- Extracts `.tar` and `.tar.gz` / `.tgz`
- Pure JavaScript — works on Windows, macOS, Linux, and WebContainers
- No global install required
- No flags, configuration or options to remember
- Automatically detects gzip compression
- Extracts into the current working directory if [target] is omitted




<br>


## Examples


Extract a `.tar`:

```

      npx tar-e archive.tar
      
      npx tar-e archive.tar ./archive

```

Extract a `.tar.gz`:

```

      npx tar-e archive.tar.gz
      
      npx tar-e archive.tar.gz ./archive

```


<br>

## Why this exists

Sometimes you just want:

- one file  
- one command  
- one job  

…and you don’t want to install a full tar implementation or deal with platform quirks.  

`tar-e` is intentionally small and predictable so you can use it anywhere without thinking      




<br>

## source

**[https://ext-code.com/utils/misc/terminal/terminal.html](https://ext-code.com/utils/misc/terminal/terminal.html)**


<br>
<br>




      
