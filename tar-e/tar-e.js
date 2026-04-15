#!/usr/bin/env node




        import fs from 'fs';
        import zlib from 'zlib';
        import tar from 'tar-stream';
        import path from 'path';
        
        
        var file    = process.argv[2];
        if(!file){
                                                                                console.error('Usage: node list-tar.js <file.tar or file.tgz>');
              process.exit(1);
        }
        
        
        var target        = process.argv[3]||'.';
        const extract     = tar.extract();
        
        
        extract.on('entry',(header,stream,next)=>{
        
              var {abs,error}    = resolve(header.name,target);
              
              if(error){
                                                                                console.log(header.name,'=>',error,'[',abs,']');
                    next();
                    return;
              }
              
                                                                                console.log(header.name,'=>',abs);
              stream.on('end',next);
              
              
              
              try{
              
                    switch(header.type){
                    
                      case 'file'         :
                                            var p   = path.dirname(abs);
                                            fs.mkdirSync(p,{recursive:true});
                                            var file    = fs.createWriteStream(abs);
                                            stream.pipe(file);
                                            break;
                                            
                      case 'directory'    :
                                            fs.mkdirSync(abs,{recursive:true});
                                            stream.resume();
                                            break;
                                            
                    }//switch
                    
              }//try
              
              catch(err){
              
                    var error   = err.message;
                                                                                console.log('file write error',error);
                    stream.resume();
                    
              }//catch
              
              
        });
        
        
        
        let stream = fs.createReadStream(file);
        
        if (file.endsWith('.gz') || file.endsWith('.tgz')) {
              stream = stream.pipe(zlib.createGunzip());
        }
        
        stream.pipe(extract);
        
        
        
        
        
        
        
        function resolve(fn,docroot = '.'){
        
              try{
              
                    const root    = path.resolve(docroot);
                                                                                //console.log(root+path.sep);
                    const abs     = path.resolve(root,fn);
                                                                                //console.log(abs.startsWith(root+path.sep),abs);
                                                                                
                    if(!abs.startsWith(root+path.sep)){
                          return {error:'not in target',abs};
                    }
                    
                    return {abs};
                    
              }//try
              
              catch(err){
              
                    var error   = err.message;
                    return {error};
                    
              }//catch
              
              
        }//resolve3
        
        
        
        