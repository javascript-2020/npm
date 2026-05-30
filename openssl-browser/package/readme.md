

# openssl-browser

This package provides openssl bundled for use in the browser without the need to npm install anything.

It is also supported in a nodejs environment.


<br>


## For ESM

```

import {opensslmod} from 'https://libs.ext-code.com/js/crypto/openssl/v2.0.0/openssl.mjs';

//  or

var {opensslmod}    = await import('https://libs.ext-code.com/js/crypto/openssl/v2.0.0/openssl.mjs');

var openssl   = opensslmod();
await openssl.run('-v');

```

Available URLs :

- [https://libs.ext-code.com/js/external/crypto/openssl/v2.0.0/openssl.mjs](https://libs.ext-code.com/js/external/crypto/openssl/v2.0.0/openssl.mjs)

- [https://cdn.jsdelivr.net/npm/openssl-browser/openssl.mjs](https://cdn.jsdelivr.net/npm/openssl-browser/openssl.mjs)


<br>


## For Script

```

<script src='https://libs.ext-code.com/js/crypto/openssl/v2.0.0/openssl.js'></script>

<script>

(async()=>{

      var openssl   = opensslmod();      
      await openssl.run('-v');
      
})();

</script>

```

Available URLs :

- [https://libs.ext-code.com/js/crypto/openssl/v2.0.0/openssl.js](https://libs.ext-code.com/js/crypto/openssl/v2.0.0/openssl.js)

- [https://cdn.jsdelivr.net/npm/openssl-browser/openssl.js](https://cdn.jsdelivr.net/npm/openssl-browser/openssl.js)



---


<br>


## Tools

Test :

[&nbsp; &nbsp; <img width="25" height="25" alt="html editor" title="html editor" valign="middle" src='https://ext-code.com/utils/editors/html-editor/images/html-editor-icon.png'>
    &nbsp; **html editor** &nbsp; [ ext-code.com ]](https://ext-code.com/utils/editors/html-editor/html-editor.html)

[&nbsp; &nbsp; <img  width="25" height="25" alt="js console" title="js console" valign="middle" src="https://ext-code.com/utils/editors/js-console/images/js-console-icon.png">
  &nbsp; **js console** &nbsp; [ ext-code.com ]](https://ext-code.com/utils/editors/js-console/js-console.html)

See what is exposed in both the script src and esm modules :

[&nbsp; &nbsp; <img width="25" height="25" alt="global state diff" title="global state diff" valign="middle" src='https://ext-code.com/utils/misc/global-state-diff/images/global-state-diff-icon.png'>
    &nbsp; **global state diff** &nbsp; [ ext-code.com ]](https://ext-code.com/utils/misc/global-state-diff/global-state-diff.html)

Experiment with the package :

[&nbsp; &nbsp; <img width="25" height="25" alt="nodejs terminal" title="nodejs terminal" valign="middle" src='https://ext-code.com/utils/misc/nodejs-terminal/images/nodejs-terminal-icon.png'>
  &nbsp; **nodejs terminal** &nbsp; [ ext-code.com ]](https://ext-code.com/utils/misc/nodejs-terminal/nodejs-terminal.html)





---

<br>


## NodeJS Environment

```

npm i openssl-browser

```

```

(async()=>{

      var opensslmod    = require('openssl-browser');
      
      var openssl       = opensslmod();
      await openssl.run('-v');
      
})();

```

```

import {opensslmod} from 'openssl-browser';

var openssl   = opensslmod();
await openssl.run('-v');

```
      

<br>


## Locally Hosted


The scripts *can* be hosted locally.

When hosting locally it may be necessary to tell opensslmod where to find the `openssl.wasm` and `openssl.wasm.js` files, 
otherwise the wasm file loaded from a remote server.  If only `openssl.wasm.js` is specified `openssl.wasm` is assumed
to be in the same directory.


```

npm i openssl-browser
      
```

The scripts can then either be copied to a prefered location

or referenced via default install location, such as :

```

import {opensslmod} from '/node_modules/openssl-browser/openssl.mjs';

//  or

var {opensslmod}    = await import('/node_modules/openssl-browser/openssl.mjs');


var openssl   = opensslmod({wasmJs:'/node_modules/openssl-browser/openssl.wasm.js'});

await openssl.run('-v');

```


```

<script src='/node_modules/openssl-browser/openssl.js'></script>

<script>

(async()=>{

      var openssl   = opensslmod({wasmJs:'/node_modules/openssl-browser/openssl.wasm.js'});
      await openssl.run('-v');

})();

</script>

```






---


<br>


## API

### opensslmod(params)
---

constructor function

- **params** : object

    - **stdout**  : function stdout(txt) for stdout output

    - **stderr**  : function stderr(txt) for stderr output

    - **wasmJs**  : location of wamsJs file

    - **wasmBinaryFile** : location of wasm binary 

    - **wasmBinary** : provide the wasm binary itself

    - **echo** : boolean : whether to echo output to console, default : true

    - **df** : boolean : enable or disable debugging

**return**

object : openssl api


<br>


### openssl.df  : true|false
---

enable or disable debugging 

***example***

```
openssl.df    = true
```

<br>


### async openssl.run(stringN)
---

run an openssl command/s, multiple arguments can be provided

- **stringX** : 'openssl <command> [arg0] [arg1] ...'

- **stringX** : '<command> [arg0] [arg1] ...'

**return** : object

- **Module** : emscriptens module

- **error** : error object

<br>

***example***

```
await openssl.run('-v','openssl genrsa 2048 -out -');
```

***note***

openssl in the command is optional


<br>


### openssl.normalisePem(pem)

alias

- **openssl.normalizePem(pem)**

- **openssl.normalise_pem(pem)**

- **openssl.normalize_pem(pem)**

---

helper function to normalise a pem certificate contained in a string, helps with embedding pem encoding certs in code.

Outputs a string that tries to be recognisable by openssl.

- **pem** : string : pem encoded key / cert

**return** : string

normalised pem


<br>


### openssl.download(v,{type})
---

helper function to download blob from v with optional mime type

- **v** - any : blob to be constructed for download

- **type** - string : mime type to be set for blob, optional


<br>


### openssl.download.file(name)
---

helper funciton to download file from emscriptens file system

- **name** - string : path of the file to be downloaded


<br>


### openssl.download.blob(blob)
---

helper function to download blob

- **blob** - blob : the blob to be downloaded


<br>


### openssl.datatype(v)
---

helper function to return the datatype of v

- **v** - any : the parameter whose datatype needs to be determined


<br>


### openssl.FS
---

exposes emscripten file system API : 
[ File System API [emscripten.org] ](https://emscripten.org/docs/api_reference/Filesystem-API.html)

***note***

not to be confused with openssl.fs ( lowercase )


<br>


### openssl.fs.clear()
---

clear the file system

<br>


### openssl.set(snapshot)
---

set the current snapshot

- **snapshot**

**return** : no return value


<br>


### openssl.fs.diff(snaphot1,snapshot2)
---

determine the difference of files between snapshot1 and snapshot 2

- **snapshot1** a filesystem snapshot
- **snapshot2** a file system snapshot

**return** : object

key values are paths of files


<br>


### openssl.fs.snapshot({path='/',Module})
---

create a snapshot of the file system

- **path** : string ( optional ) : where to take the snapshot from
- **Module** : emscripten Module ( optional ) : the emscripten Module to take the snapshot from

**return** : snapshot


<br>


### openssl.fs.restore({path='/',snapshot,Module})
---

restore a snapshot

- **path** : string ( optional ) : where to restore the snapshot
- **snapshot** : snapshot : the snapshot to restore
- **Module**  : emscripten Module ( optional ) : the module to restore the snapshot on, uses the current module if not specified

**return** : undefined, no return value


<br>


### openssl.fs.complete()
---

determine the difference of files between initial snapshot and current snapshot

**return** : object

key values are paths of files


<br>




---

<br>


## Further Reading

[https://emscripten.org/docs/api_reference/Filesystem-API.html](https://emscripten.org/docs/api_reference/Filesystem-API.html)

[https://docs.openssl.org/master/](https://docs.openssl.org/master/)


<br>


## See Also

[https://www.npmjs.com/package/node-forge-browser](https://www.npmjs.com/package/node-forge-browser)

[https://ext-code.com/utils/x509/index.html](https://ext-code.com/utils/x509/index.html)

[https://ext-code.com/utils/x509/generate-https-certificate/generate-https-certificate.html](https://ext-code.com/utils/x509/generate-https-certificate/generate-https-certificate.html)

[https://ext-code.com/utils/x509/certificate-info/certificate-info.html](https://ext-code.com/utils/x509/certificate-info/certificate-info.html)


---


<br>


## Examples

```

<script type=module>

        import {opensslmod} from 'https://libs.ext-code.com/js/crypto/openssl/v2.0.0/openssl.mjs';
        
  
        var stdout    = console.log.bind(console,'[ stdout ]');
        var stderr    = console.log.bind(console,'[ stderr ]');
        
        var openssl   = opensslmod({stdout,stderr});
        
        
        await openssl.run('openssl -v');

        
        await openssl.run('openssl genrsa -out test.key 2048');
        var key   = openssl.FS.readFile('test.key',{encoding:'utf8'});
        console.log(key);
        
        
        await openssl.run('req -new -x509 -key test.key -out test.pem -subj /CN=webcontainer-test');
        var cert   = openssl.FS.readFile('test.pem',{encoding:'utf8'});
        console.log(cert);

        var result    = openssl.fs.complete();
        console.log(result);
        
        
        //  openssl.fs.download.file('test.pem');
        //  openssl.fs.download(cert,'cert.pem');
        
        
</script>

```

---


```

<script type=module>

        var {opensslmod}    = await import('https://libs.ext-code.com/js/crypto/openssl/v2.0.0/openssl.mjs');
        
  
        var stdout    = console.log.bind(console,'[ stdout ]');
        var stderr    = console.log.bind(console,'[ stderr ]');
        
        var openssl   = opensslmod({stdout,stderr});
        
        
        await openssl.run('openssl -v');

        
        await openssl.run(
              'openssl genrsa -out test.key 2048',
              'openssl req -new -x509 -key test.key -out test.pem -subj /CN=webcontainer-test'
        );
        
        
        var key   = openssl.FS.readFile('test.key',{encoding:'utf8'});
        console.log(key);
        
        var cert   = openssl.FS.readFile('test.pem',{encoding:'utf8'});
        console.log(cert);

        var result    = openssl.fs.complete();
        console.log(result);
        

        //  openssl.fs.download.file('test.pem');
        //  openssl.fs.download(cert,'cert.pem');
        
</script>

```

---


```

<script src='https://libs.ext-code.com/js/crypto/openssl/v2.0.0/openssl.js'></script>

<script>

(async()=>{
  
        var stdout    = console.log.bind(console,'[ stdout ]');
        var stderr    = console.log.bind(console,'[ stderr ]');
        
        var openssl   = opensslmod({stdout,stderr});
        
        
        await openssl.run('openssl -v');

        
        await openssl.run('openssl genrsa -out test.key 2048');
        var key   = openssl.FS.readFile('test.key',{encoding:'utf8'});
        console.log(key);
        
        
        await openssl.run('req -new -x509 -key test.key -out test.pem -subj /CN=webcontainer-test');
        var cert   = openssl.FS.readFile('test.pem',{encoding:'utf8'});
        console.log(cert);

        var result    = openssl.fs.complete();
        console.log(result);


        //  openssl.fs.download.file('test.pem');
        //  openssl.fs.download(cert,'cert.pem');
        
})();

</script>

```

---

```

<style>#output{font-family:monospace}</style>

<h3>openssl-browser</h3>

<pre id=output></pre>


<script type=module>
                                                                                console.clear();
                                                                                console.log('http-local.html');

        var {opensslmod}    = await import('https://libs.ext-code.com/js/crypto/openssl/v2.0.0/openssl.mjs');
        
        var stdout    = txt=>output.append('[ stdout ] ',txt,'\n');
        var stderr    = txt=>output.append('[ stderr ] ',txt,'\n');
        
        var openssl   = opensslmod({stdout,stderr});
        openssl.df    = true;
                                                                                //  create the emscripten filesystem for this example
        
        await openssl.init();
        
        
        var txt   = `
[ req ]
distinguished_name = req_distinguished_name
x509_extensions = v3_ca
prompt = no

[ req_distinguished_name ]
C  = GB
ST = England
L  = Sheffield
O  = My Organisation
OU = Certificate Authority
CN = My Test CA
emailAddress = admin@example.com

[ v3_ca ]
basicConstraints = critical, CA:TRUE
keyUsage = critical, keyCertSign, cRLSign
subjectKeyIdentifier = hash
nameConstraints = critical, @nc

[ nc ]
permitted;DNS.1 = example.com
permitted;DNS.2 = .example.com
permitted;DNS.3 = .internal.local
excluded;DNS.1 = .malicious.com
permitted;IP.1 = 192.168.0.0/255.255.0.0
permitted;IP.2 = 10.0.0.0/255.0.0.0
`;

        openssl.FS.writeFile('ca-ext.ini',txt);
        
        await openssl.run(
              'openssl genrsa -out ca.key 2048',
              'openssl req -new -x509 -key ca.key -out ca.cert -days 365 -config ca-ext.ini -extensions v3_ca',
              'openssl x509 -in ca.cert -text -noout'
        );
        
        var txt   = openssl.FS.readFile('ca.key',{encoding:'utf8'});
        stdout('ca.key');
        stdout(txt);
        var txt   = openssl.FS.readFile('ca.cert',{encoding:'utf8'});
        stdout('ca.cert');
        stdout(txt);

        var txt   = `
[ req ]
distinguished_name = req_distinguished_name
req_extensions     = v3_req
prompt             = no

[ req_distinguished_name ]
C  = GB
ST = England
L  = Sheffield
O  = My Organisation
OU = Web Services
CN = example.com

[ v3_req ]
basicConstraints = CA:FALSE
keyUsage         = digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth, clientAuth
subjectAltName   = @san

[ san ]
DNS.1 = example.com
DNS.2 = www.example.com
DNS.2 = api.example.com
IP.1  = 192.168.1.10
IP.2  = 10.0.0.5
        `;
        
        openssl.FS.writeFile('ext.ini',txt);
        
        await openssl.run(
              'openssl genrsa -out server.key 2048',
              'openssl req -new -key server.key -out server.csr -config ext.ini',
              'openssl x509 -req -in server.csr -CA ca.cert -CAkey ca.key -CAcreateserial -out server.cert -days 365 -extensions v3_req -extfile ext.ini',
              'openssl x509 -in server.cert -text -noout'
        );
        
        var txt   = openssl.FS.readFile('server.key',{encoding:'utf8'});
        stdout('server.key');
        stdout(txt);
        var txt   = openssl.FS.readFile('server.cert',{encoding:'utf8'});
        stdout('server.cert');
        stdout(txt);

        stdout('verify');
        await openssl.run(
              'openssl verify -CAfile ca.cert server.cert'
        );
        

</script>

```

---


#### note : locally hosted

```

npm i openssl-browser

```

then run a web server

```

<style>#output{font-family:monospace}</style>

<h3>openssl-browser</h3>

<pre id=output></pre>


<script type=module>
                                                                                console.clear();
                                                                                console.log('http-local.html');

        import {opensslmod} from '/node_modules/openssl-browser/openssl.mjs';
        
        var stdout    = txt=>output.append('[ stdout ] ',txt,'\n');
        var stderr    = txt=>output.append('[ stderr ] ',txt,'\n');
        var wasmJs    = '/node_modules/openssl-browser/openssl.wasm.js';
        
        var openssl   = opensslmod({stdout,stderr,wasmJs});
        openssl.df    = true;
                                                                                //  create the emscripten filesystem for this example
        
        await openssl.init();
        
        
        var txt   = `
[ req ]
distinguished_name = req_distinguished_name
x509_extensions = v3_ca
prompt = no

[ req_distinguished_name ]
C  = GB
ST = England
L  = Sheffield
O  = My Organisation
OU = Certificate Authority
CN = My Test CA
emailAddress = admin@example.com

[ v3_ca ]
basicConstraints = critical, CA:TRUE
keyUsage = critical, keyCertSign, cRLSign
subjectKeyIdentifier = hash
nameConstraints = critical, @nc

[ nc ]
permitted;DNS.1 = example.com
permitted;DNS.2 = .example.com
permitted;DNS.3 = .internal.local
excluded;DNS.1 = .malicious.com
permitted;IP.1 = 192.168.0.0/255.255.0.0
permitted;IP.2 = 10.0.0.0/255.0.0.0
`;

        openssl.FS.writeFile('ca-ext.ini',txt);
        
        await openssl.run(
              'openssl genrsa -out ca.key 2048',
              'openssl req -new -x509 -key ca.key -out ca.cert -days 365 -config ca-ext.ini -extensions v3_ca',
              'openssl x509 -in ca.cert -text -noout'
        );
        
        var txt   = openssl.FS.readFile('ca.key',{encoding:'utf8'});
        stdout('ca.key');
        stdout(txt);
        var txt   = openssl.FS.readFile('ca.cert',{encoding:'utf8'});
        stdout('ca.cert');
        stdout(txt);

        var txt   = `
[ req ]
distinguished_name = req_distinguished_name
req_extensions     = v3_req
prompt             = no

[ req_distinguished_name ]
C  = GB
ST = England
L  = Sheffield
O  = My Organisation
OU = Web Services
CN = example.com

[ v3_req ]
basicConstraints = CA:FALSE
keyUsage         = digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth, clientAuth
subjectAltName   = @san

[ san ]
DNS.1 = example.com
DNS.2 = www.example.com
DNS.2 = api.example.com
IP.1  = 192.168.1.10
IP.2  = 10.0.0.5
        `;
        
        openssl.FS.writeFile('ext.ini',txt);
        
        await openssl.run(
              'openssl genrsa -out server.key 2048',
              'openssl req -new -key server.key -out server.csr -config ext.ini',
              'openssl x509 -req -in server.csr -CA ca.cert -CAkey ca.key -CAcreateserial -out server.cert -days 365 -extensions v3_req -extfile ext.ini',
              'openssl x509 -in server.cert -text -noout'
        );
        
        var txt   = openssl.FS.readFile('server.key',{encoding:'utf8'});
        stdout('server.key');
        stdout(txt);
        var txt   = openssl.FS.readFile('server.cert',{encoding:'utf8'});
        stdout('server.cert');
        stdout(txt);

        stdout('verify');
        await openssl.run(
              'openssl verify -CAfile ca.cert server.cert'
        );
        

</script>
      

```


<br>

---
---

<br>

readme generated by ( it has an npm specific feature ),

[&nbsp; &nbsp; <img  width="25" height="25" alt="markdown editor" title="markdown editor" valign="middle" src="https://ext-code.com/utils/editors/markdown-editor/images/markdown-editor-icon.png">
  &nbsp; **markdown editor** &nbsp; [ ext-code.com ]](https://ext-code.com/utils/editors/markdown-editor/markdown-editor.html)

<br>
<br>
.





