module.exports = {
    users: [
        {
            email: "user@abv.bg",
            password: 111111
        },
    ],

    tutorials: [
        {
            technology: "javascript",
            name: "object composition",
            content: "<h1>Object composition</h1><h2><strong style=\"color: rgb(35, 68, 101);\">Destructuring, Aggregation, Concatenation, Delegation</strong></h2><ol><li><span style=\"color: rgb(35, 68, 101);\">Object Composition</span></li><li><span style=\"color: rgb(35, 68, 101);\">Destructuring</span></li><li><span style=\"color: rgb(35, 68, 101);\">Forms of Object Composition</span></li></ol><h3><strong style=\"color: rgb(35, 68, 101);\">What is Object Composition?</strong></h3><p><span style=\"color: rgb(35, 68, 101);\">The simple answer is \"</span><em style=\"color: rgb(35, 68, 101);\">Objects holding other objects\". </em>\"<em>Combining simple objects or data types into more complex ones</em>\".</p><pre class=\"ql-syntax\" spellcheck=\"false\">let student = {\n&nbsp; firstName: \"Maria\",\n&nbsp; lastName: \"Green\",\n&nbsp; age: 22,\n&nbsp; location: { lat: 42.698, lng: 23.322 }\n}\nconsole.log(student);\nconsole.log(student.location.lat);\n\n// -----\n\nlet name = \"Sofia\";\nlet population = 1325744;\nlet country = \"Bulgaria\";\nlet town = { name, population, country };\nconsole.log(town); // Object {name: \"Sofia\", population: 1325744,country: \"Bulgaria\"}\n\ntown.location&nbsp;=&nbsp;{&nbsp;lat:&nbsp;42.698,&nbsp;lng:&nbsp;23.322&nbsp;};\n\nconsole.log(town);&nbsp;//&nbsp;Object&nbsp;{…,&nbsp;location:&nbsp;Object}\n</pre><p>Combining data with <strong>functions();</strong></p><pre class=\"ql-syntax\" spellcheck=\"false\">let rect = {\n&nbsp; width: 10,\n&nbsp; height: 4,\n&nbsp; grow: function(w, h) {&nbsp;\n&nbsp; &nbsp; this.width += w; this.height += h;\n&nbsp; },\n&nbsp; print: function() {&nbsp;\n&nbsp; &nbsp; console.log(\\`[${this.width} x ${this.height}]\\`);\n&nbsp; }\n};\nrect.grow(2, 3);\nrect.print(); // [12 x 7]\n</pre><h3>Destructuring</h3><p><em>The ability to \"dive into\" an array or object and reference something inside of it more directly</em></p><pre class=\"ql-syntax\" spellcheck=\"false\">const department = {\n&nbsp; name: \"Engineering\",\n&nbsp; data: {}\n};\n\nconst { data } = department // now data references the data object directly\nconst objectList = [ { key: \"value\" }, { key: \"value\" }, { key: \"value\" } ]\nconst [ obj, obj1, obj2 ] = objectList&nbsp;\n// now each object can be referenced directly\n</pre><h3>Nested destructuring</h3><p>Destructuring can work beyond the top level</p><pre class=\"ql-syntax\" spellcheck=\"false\">const department = {\n&nbsp; name: \"Engineering\",\n&nbsp; data: {&nbsp;\n&nbsp; &nbsp; director: {\n&nbsp; &nbsp; &nbsp; name: \"John\",&nbsp;\n&nbsp; &nbsp; &nbsp; position: \"Engineering Director\"&nbsp;\n&nbsp; &nbsp; },&nbsp;\n&nbsp; &nbsp; employees: [],\n&nbsp; &nbsp; company: \"Quick Build\"&nbsp;\n&nbsp; }\n}\nconst {data: {director}} = department&nbsp;\n// director is { name: \"John\", position: \"Engineering Director\"}\n</pre><p><em>You need to know the position of what you are looking for</em></p><p><em>Provide a reference variable (or comma placeholder) for each element up and until the one you are looking for</em></p><pre class=\"ql-syntax\" spellcheck=\"false\">const departments = [[\"Engineering\", [\"secretary\", \"director\", \"worker\"]], [\"Accounting\", [\"director\", \"accountant\"]]];\nconst [[name, positions]] = departments\n// name is \"Engineering\"\n// positions is [ \"secretary\", \"director\", \"worker\" ]\n</pre><p>Object and Array destructuring</p><pre class=\"ql-syntax\" spellcheck=\"false\">const employees = [{name: \"John\", position: \"worker\"}, {name: \"Jane\", position: \"secretary\"}]\nconst [{name}] = employees // name is \"John\"\n\n\nconst company = {&nbsp;\n&nbsp; employees: [\"John\", \"Jane\", \"Sam\", \"Suzanne\"],\n&nbsp; name: \"Quick Build\",\n}\nconst {employees:[employee]} = company // employee is \"John\"\n</pre><p><strong>TODO:</strong></p><ul><li>Aggregaiton,</li><li>Concatenation</li><li>Delegation</li></ul><p><strong>Video </strong>with <strong>Stamo Petkov </strong>explaining <strong>Object Composition</strong></p><iframe class=\"ql-video\" frameborder=\"0\" allowfullscreen=\"true\" src=\"https://www.youtube.com/embed/f1MHAXa_4Ts?showinfo=0\"></iframe><h1><br></h1><p><br></p>",
        },
        {
            technology: "javascript",
            name: "asynchronous programming",
            content: "<h1>TODO... (:</h1>"
        },
        {
            technology: "java",
            name: "stacks and queues",
            content: "<h1>TODO... :))</h1>"
        },
        {
            technology: "java",
            name: "multidimensional arrays",
            content: "<h1>TODO... :))</h1>"
        },
        {
            technology: "python",
            name: "tuples and sets",
            content: "<h1>TODO... ((:</h1>"
        },
        {
            technology: "python",
            name: "comprehension",
            content: "<h1>TODO... :))</h1>"
        },
        {
            technology: "csharp",
            name: "stacks and queues",
            content: "<h1>TODO... ((:</h1>"
        },
        {
            technology: "csharp",
            name: "generics",
            content: "<h1>TODO... ((:</h1>"
        }
    ]
}