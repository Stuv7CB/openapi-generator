(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{134:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return r})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return c}));var o=t(1),i=t(9),a=(t(0),t(314)),l={id:"debugging",title:"Debugging"},r={id:"debugging",title:"Debugging",description:"## Generation",source:"@site/../docs/debugging.md",permalink:"/docs/debugging",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/debugging.md",lastUpdatedBy:"Brian Erkkinen",lastUpdatedAt:1646114020,sidebar:"docs",previous:{title:"Customization",permalink:"/docs/customization"},next:{title:"Workflow Integrations",permalink:"/docs/integrations"}},s=[{value:"Generation",id:"generation",children:[]},{value:"Templates",id:"templates",children:[]},{value:"Runtime",id:"runtime",children:[]},{value:"Logs",id:"logs",children:[]}],p={rightToc:s};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"generation"},"Generation"),Object(a.b)("p",null,"As a user there may be times when generated outputs don't match your expectations it's unclear why. The CLI supports a ",Object(a.b)("inlineCode",{parentName:"p"},"--dry-run")," option which may be used to inspect the anticipated file operations without making changes to the file system."),Object(a.b)("p",null,"Suppose you generate using the ",Object(a.b)("inlineCode",{parentName:"p"},"--minimal-update")," option, and you notice on subsequent generations of a client that no files have changed. This is by design."),Object(a.b)("p",null,"For example, if you generate the aspnetcore generator passing ",Object(a.b)("inlineCode",{parentName:"p"},"--minimal-update --dry-run")," to the sample generation script in the code repository:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'export JAVA_OPTS="-Dlog.level=off"\n./bin/generate-samples.sh ./bin/configs/lua.yaml -- --minimal-update --dry-run\n')),Object(a.b)("p",null,"You'll see the output similar to the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"$ ./bin/generate-samples.sh ./bin/configs/lua.yaml -- --minimal-update --dry-run\n# START SCRIPT: ./bin/generate-samples.sh\nThis script generates all configs under bin/configs by default.\nYou may generate a targeted script or set of scripts using glob patterns.\n\nFor example:\n    ./bin/generate-samples.sh bin/configs/java-*\n\nYou may generate a single config with additional options if you use -- to\nseparate the single config file from the generator arguments.\n\nFor example:\n    ./bin/generate-samples.sh bin/configs/java-vertx.yaml -- --global-property debugModels=true\n\n\n[main] INFO  o.o.codegen.DefaultGenerator - Generating with dryRun=true\n[main] INFO  o.o.codegen.DefaultGenerator - OpenAPI Generator: lua (client)\n[main] INFO  o.o.codegen.DefaultGenerator - Generator 'lua' is considered beta.\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] INFO  o.o.codegen.DefaultGenerator - Model inline_object (marked as unused due to form parameters) is generated due to the system property skipFormModel=false (default)\n[main] INFO  o.o.codegen.DefaultGenerator - Model inline_object_1 (marked as unused due to form parameters) is generated due to the system property skipFormModel=false (default)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/json)\n[main] WARN  o.o.codegen.DefaultCodegen - Multiple MediaTypes found, using only the first one\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/json)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] WARN  o.o.codegen.utils.ModelUtils - Multiple schemas found in the OAS 'content' section, returning only the first one (application/xml)\n[main] ERROR o.o.codegen.DefaultGenerator - \n\nDry Run Results:\n\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/.openapi-generator-ignore\nn /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/.openapi-generator/VERSION\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/api_response_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/category_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/inline_object_1_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/inline_object_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/order_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/pet_api_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/pet_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/store_api_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/tag_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/user_api_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/user_spec.lua\n\n\nStates:\n\n  - w Write\n  - n Write if New/Updated\n  - i Ignored\n  - s Skipped Overwrite\n  - k Skipped by user option(s)\n  - e Error evaluating file write state\n\n\n[main] ERROR o.o.codegen.DefaultGenerator - \n\nDry Run Results:\n\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/.openapi-generator-ignore\nn /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/.openapi-generator/VERSION\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/api_response_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/category_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/inline_object_1_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/inline_object_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/order_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/pet_api_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/pet_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/store_api_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/tag_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/user_api_spec.lua\nk /Users/williamcheng/Code/openapi-generator/samples/client/petstore/lua/spec/user_spec.lua\n\n\nStates:\n\n  - w Write\n  - n Write if New/Updated\n  - i Ignored\n  - s Skipped Overwrite\n  - k Skipped by user option(s)\n  - e Error evaluating file write state\n\n")),Object(a.b)("p",null,"The output lists the files which would be written in a normal run of the tool. Notice that we skip ",Object(a.b)("inlineCode",{parentName:"p"},".openapi-generator-ignore")," because the file exists and we don't want to blow away the user's generation rules. Most of these files will overwrite output files only if the contents slated for write are different from those on the filesystem; this is denoted by an ",Object(a.b)("inlineCode",{parentName:"p"},"n")," preceding the filename. Some of the above lines begin with a ",Object(a.b)("inlineCode",{parentName:"p"},"w"),", meaning these files will ",Object(a.b)("em",{parentName:"p"},"always")," result in a write operation."),Object(a.b)("p",null,"If you find an operation that you feel should result in a different state, please ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator/issues/new/choose"}),"open an issue")," or ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator/compare"}),"submit a pull request")," to change the behavior (we welcome all contributions)."),Object(a.b)("h2",{id:"templates"},"Templates"),Object(a.b)("p",null,"Sometimes, you may have issues with variables in your templates. As discussed in the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/templating"}),"templating")," docs, we offer a variety of system properties for inspecting the models bound to templates."),Object(a.b)("dl",null,Object(a.b)("dt",null,Object(a.b)("code",null,"--global-property debugOpenAPI")),Object(a.b)("dd",null,"Prints out the JSON model of the OpenAPI Document, as seen by OpenAPI Generator"),Object(a.b)("dt",null,Object(a.b)("code",null,"--global-property debugModels")),Object(a.b)("dd",null,"Prints out the JSON model passed to model templates"),Object(a.b)("dt",null,Object(a.b)("code",null,"--global-property debugOperations")),Object(a.b)("dd",null,"Prints out the JSON model passed to operation (api) templates"),Object(a.b)("dt",null,Object(a.b)("code",null,"--global-property debugSupportingFiles")),Object(a.b)("dd",null,"Prints out the JSON model passed to supporting files")),Object(a.b)("p",null,"One or more of these properties can be passed alongside other command line options:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"openapi-generator generate -g go \\\n    -o out \\\n    -i petstore-minimal.yaml \\\n    --global-property debugModels,debugOperations\n")),Object(a.b)("p",null,"Or you can add these to your ",Object(a.b)("inlineCode",{parentName:"p"},"JAVA_OPTS")," environment variable (this applies to every invocation of the tool):"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'export JAVA_OPTS="${JAVA_OPTS} --global-property debugModels,debugOperations"\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"NOTE: Globally available system options like these will apply to all invocations of the generator (CLI and plugins)")),Object(a.b)("h2",{id:"runtime"},"Runtime"),Object(a.b)("p",null,"When you're working with a custom generator, a new generator, or otherwise trying to understand the behavior of the toolset, you may need to attach a remote debugger in order to step through the code."),Object(a.b)("p",null,"The steps are shown here for a specific version of the generator, but apply the same if you're working off master or a feature branch."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Determine the version of ",Object(a.b)("inlineCode",{parentName:"li"},"openapi-generator")," you're using. For the CLI, this is:  ",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"openapi-generator version\n"))),Object(a.b)("li",{parentName:"ul"},"Navigate to the ",Object(a.b)("inlineCode",{parentName:"li"},"openapi-generator")," source directory (see ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/contribute-building"}),"building")," docs for obtaining source code and brief introduction)."),Object(a.b)("li",{parentName:"ul"},"Checkout the branch/tag for the target version. Branches are not prefixed, but tags are prefixed with a ",Object(a.b)("inlineCode",{parentName:"li"},"v"),". For instance if you're using version ",Object(a.b)("inlineCode",{parentName:"li"},"3.3.0"),", you will execute:",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"git checkout v3.3.0\n"))),Object(a.b)("li",{parentName:"ul"},"Open the project in your IDE."),Object(a.b)("li",{parentName:"ul"},"Setup your IDE for remote debugging. You'll want to define a port used for connecting the remote debugger. For this example, we'll use ",Object(a.b)("inlineCode",{parentName:"li"},"5005"),". See external tutorials for ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.jetbrains.com/help/idea/run-debug-configuration-remote-debug.html"}),"IntelliJ")," and ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.ibm.com/developerworks/library/os-eclipse-javadebug/index.html"}),"Eclipse")),Object(a.b)("li",{parentName:"ul"},"Export the debug configuration, specifying ",Object(a.b)("inlineCode",{parentName:"li"},"suspend=y")," so you have time to attach a remote debugger. These are passed as Java system properties, either on command line or as part of the ",Object(a.b)("inlineCode",{parentName:"li"},"JAVA_OPTS")," environment variable. This will look like:",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),'export JAVA_OPTS="${JAVA_OPTS} -agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=5005"\n'))),Object(a.b)("li",{parentName:"ul"},"Execute the generator with your desired options. You should see the application output ",Object(a.b)("em",{parentName:"li"},"only"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"Listening for transport dt_socket at address: 5005\n"))),Object(a.b)("li",{parentName:"ul"},"Set breakpoints in code, and then attach your remote debugger from your IDE (see above). The generator will automatically unblock once the remote debugger is attached. You can now step through the code.")),Object(a.b)("h2",{id:"logs"},"Logs"),Object(a.b)("p",null,"You can try to enable debugging log with ",Object(a.b)("inlineCode",{parentName:"p"},"-Dlog.level=debug")," option to the ",Object(a.b)("inlineCode",{parentName:"p"},"JAVA_OPTS")," environment variable to see more information:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'export JAVA_OPTS="${JAVA_OPTS} -Dlog.level=debug"\n')),Object(a.b)("p",null,"Set the option then DEBUG logs are printed out:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"openapi-generator generate -g go ...\n\n...\n...\n[main] DEBUG o.o.codegen.DefaultCodegen - debugging fromProperty for files : class Schema {\n    type: null\n    format: null\n    $ref: #/components/schemas/File\n...\n...\n")))}c.isMDXComponent=!0},314:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var o=t(0),i=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),c=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r({},n,{},e)),t},u=function(e){var n=c(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?i.a.createElement(g,r({ref:n},p,{components:t})):i.a.createElement(g,r({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var p=2;p<a;p++)l[p]=t[p];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);