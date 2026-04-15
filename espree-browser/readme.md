

# espree-browser

This package provides espree bundled for use in the browser without the need to npm install anything 

you can use this tool to see what is exposed in both the script src and esm modules

**[global state diff -- https://ext-code.com/utils/misc/global-state-diff/global-state-diff.html](https://ext-code.com/utils/misc/global-state-diff/global-state-diff.html)**


---


## For script

```

      <script src='https://libs.ext-code.com/external/js/espree/espree.js'></script>
      
```

- [https://libs.ext-code.com/external/js/espree/espree.js](https://libs.ext-code.com/external/js/espree/espree.js)

- [https://cdn.jsdelivr.net/npm/espree-browser/espree.js](https://cdn.jsdelivr.net/npm/espree-browser/espree.js)


test it out with this tool

**[html editor -- https://ext-code.com/utils/editors/html-editor/html-editor.html](https://ext-code.com/utils/editors/html-editor/html-editor.html)**




---



## For esm

```

      import {espree} from 'https://libs.ext-code.com/external/js/espree.m.js';

      //
      
      var {espree}    = await import('https://libs.ext-code.com/external/js/espree/espree.m.js');

```

- [https://libs.ext-code.com/external/js/espree/espree.m.js](https://libs.ext-code.com/external/js/espree/espree.m.js)

- [https://cdn.jsdelivr.net/npm/espree-browser/espree.m.js](https://cdn.jsdelivr.net/npm/espree-browser/espree.m.js)


test it out with this tool

**[js console -- https://ext-code.com/utils/editors/js-console/js-console.html](https://ext-code.com/utils/editors/js-console/js-console.html)**



---



## Further Reading

[https://github.com/eslint/espree](https://github.com/eslint/espree)

[https://eslint.org/blog/2014/12/espree-esprima/](https://eslint.org/blog/2014/12/espree-esprima/)

[https://www.npmjs.com/package/espree](https://www.npmjs.com/package/espree)



---



## examples

```
            
      <script type=module>
      
      
            import {espree} from 'https://libs.ext-code.com/external/js/espree/espree.m.js';
            
            
            const code    = `
            
                  function greet(name) {
                    console.log("Hello " + name);
                  }
                  
                  const add = (a, b) => a + b;
                  
            `;
      
      
            const options   = {
                	                                                                    // attach range information to each node
                	range               : false,
                	                                                                    // attach line/column location information to each node
                	loc                 : false,
                	                                                                    // create a top-level comments array containing all comments
                	comment             : false,
                	                                                                    // create a top-level tokens array containing all tokens
                	tokens              : false,
                
                                                                                    	// Set to 3, 5 (the default), 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                                                                                    	// 16 or 17 to specify the version of ECMAScript syntax you want to use.
                                                                                    	// You can also set to 2015 (same as 6), 2016 (same as 7),
                                                                                    	// 2017 (same as 8), 2018 (same as 9), 2019 (same as 10),
                                                                                    	// 2020 (same as 11), 2021 (same as 12), 2022 (same as 13),
                                                                                    	// 2023 (same as 14), 2024 (same as 15), 2025 (same as 16) or
                                                                                    	// 2026 (same as 17) to use the year-based naming.
                                                                                    	// You can also set "latest" to use the most recently supported version.
                	ecmaVersion        : 'latest',
                                                                                      // only allowed when ecmaVersion is 3
                	//allowReserved     : true, 
                	                                                                    // specify which type of script you're parsing ("script",
                	                                                                    // "module", or "commonjs")
                	sourceType         : "module",
                	                                                                    // specify additional language features
                	ecmaFeatures       : {
                		                                                                  // enable JSX parsing
                		                        jsx             : false,
                		                                                                  // enable return in global scope (set to true automatically
                		                                                                  // when sourceType is "commonjs")
                		                        globalReturn    : false,
                		                                                                  // enable implied strict mode (if ecmaVersion >= 5)
                		                        impliedStrict   : false,
                	                     },
            };
      
      
            const ast   = espree.parse(code,options);
            
      
            console.log(ast);    
            console.log(JSON.stringify(ast,null,4));      
      
      
      </script>
      
```

---


```
      
      var {espree}    = await import('https://libs.ext-code.com/external/js/espree/espree.m.js');
      
      const code    = `
      
            function greet(name) {
              console.log("Hello " + name);
            }
            
            const add = (a, b) => a + b;
            
      `;
      
      const ast   = espree.parse(code,{
            ecmaVersion     : 'latest',
            sourceType      : 'module',
            ecmaFeatures    : {jsx:true}
      });
      
      
      console.log(ast);    
      console.log(JSON.stringify(ast,null,4));

      
/*      
      estraverse.traverse(ast, {
            enter(node) {
                  if (node.type === 'FunctionDeclaration') {
                        console.log('FunctionDeclaration:', node.id.name);
                  }
      
                  if (
                        node.type === 'VariableDeclarator' &&
                        node.init &&
                        (node.init.type === 'ArrowFunctionExpression' ||
                              node.init.type === 'FunctionExpression')
                  ) {
                        console.log('Function assigned to variable:', node.id.name);
                  }
            }
      });
*/

```

---


```

      <script src='https://libs.ext-code.com/external/js/espree/espree.js'></script>
      
      <script>

            const code    = `
            
                  function greet(name) {
                    console.log("Hello " + name);
                  }
                  
                  const add = (a, b) => a + b;
                  
            `;
      
            const ast   = espree.parse(code,{ecmaVersion:'latest',sourceType:'module',});

            console.log(ast);    
            console.log(JSON.stringify(ast,null,4));      
      
      </script>
      
```

---


